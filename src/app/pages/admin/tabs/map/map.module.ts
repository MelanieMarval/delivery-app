import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapRoutingModule } from './map-routing.module';

// Components
import { MapPage } from './map-page';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MapRoutingModule,
        PipesModule
    ],
    declarations: [MapPage],
    providers: []
})
export class MapModule {
}
