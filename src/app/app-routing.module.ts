import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';


const routes: Routes = [
  {
    path: "dashboard",
    component: DashComponent
  },
  {
    path: "sales",
    loadChildren: () => import("./sale/sale.module").then(m=>m.SaleModule)
  },
  {
    path: "",
    component: DashComponent
  },
  {
    path: "products",
    loadChildren: () => import("./product/product.module").then(m=>m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
