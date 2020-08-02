import {NgModule} from '@angular/core'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
    imports:[
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule
    ]
})
export class MaterialModule{

}