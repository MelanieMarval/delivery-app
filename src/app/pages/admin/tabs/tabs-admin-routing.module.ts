import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsAdmin } from './tabs-admin';
import { UserProfilePage } from './user-profile/user-profile';

const routes: Routes = [
    {
        path: '',
        component: TabsAdmin,
        children: [
            {
                path: '',
                redirectTo: 'activity',
                pathMatch: 'full'
            },
            {
                path: 'activity',
                loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
            },
            {
                path: 'businesses',
                loadChildren: () => import('./businesses/businesses.module').then(m => m.BusinessesModule)
            },
            {
                path: 'map',
                loadChildren: () => import('./map/map.module').then(m => m.MapModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            }
        ],
    },
    {
        path: 'users/profile',
        component: UserProfilePage
    },
    {
        path: 'business-details',
        loadChildren: () => import('./../business-details/business-details.module').then(m => m.BusinessDetailsModule)
    },

    {
        path: '**',
        redirectTo: 'activity',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsAdminRoutingModule {
}

