import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';
import { OrdersTableService } from './orders-table.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<OrdersTableItem>;
  dataSource: OrdersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  dataLength: number;

  displayedColumns = [
    "id",
    "date",
    "name",
    "status",
    "orderTotal",
    "paymentMode",
  ];
  constructor(private orderService: OrdersTableService) { }

  ngOnInit() {
    this.dataSource = new OrdersTableDataSource(this.orderService);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
