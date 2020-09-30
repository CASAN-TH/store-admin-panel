import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';
import { CardComponent } from './card/card.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '**',
    component: DashComponent
  }
];

@NgModule({
  declarations: [DashComponent, ProductSalesChartComponent, SalesTrafficChartComponent, AnnualSalesChartComponent, StoreSessionsChartComponent, CardComponent, OrdersTableComponent, MiniCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule
  ]
})
export class DashboardModule { }
