import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: "sales",
    loadChildren: () => import("./sale/sale.module").then(m => m.SaleModule)
  },
  {
    path: "orders",
    loadChildren: () => import("./orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: "customers",
    loadChildren: () => import("./customer/customer.module").then(m => m.CustomerModule)
  },
  {
    path: "products",
    loadChildren: () => import("./product/product.module").then(m => m.ProductModule)
  },
  {
    path: "suppliers",
    loadChildren: () => import("./suppliers/suppliers.module").then(m => m.SuppliersModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'**',
    redirectTo:'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
