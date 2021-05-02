// this module is to use later

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderEntryComponent } from './order-entry.component'

@NgModule({
    declarations: [
        OrderEntryComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [ 
        OrderEntryComponent
    ]
})
export class OrderEntryModule { }