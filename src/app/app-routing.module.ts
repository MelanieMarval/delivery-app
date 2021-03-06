import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'tutorial',
    //     pathMatch: 'full'
    // },
    {
        path: 'tutorial',
        loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule)
    },
    {
        path: 'terms',
        loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule),
    },
    {
        path: 'user-register',
        loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterModule),
    },
    {
        path: 'admin',
        children: [
            {
                path: '',
                redirectTo: 'tabs',
                pathMatch: 'full'
            },
            {
                path: 'tabs',
                loadChildren: () => import('./pages/admin/tabs/tabs-admin.module').then(m => m.TabsModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./pages/admin/profile/profile.module').then(m => m.ProfileModule)
            },
        ]
    },
    {
        path: 'app',
        children: [
            {
                path: '',
                redirectTo: 'tabs',
                pathMatch: 'full'
            },
            {
                path: 'tabs',
                loadChildren: () => import('./pages/tabs/tabs-page.module').then(m => m.TabsModule)
            },
            {
                path: 'my-products',
                loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'shop',
                loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./pages/tabs/profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: '**',
                redirectTo: 'tabs',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

