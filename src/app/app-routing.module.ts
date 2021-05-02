import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderEntryComponent } from './pages/order-entry/order-entry.component';

const routes: Routes = [
  { path: 'order-entry', component: OrderEntryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'order-entry' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
