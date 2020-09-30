import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path:"",
    component:ListComponent
  },
  {
    path:"form/:id",
    component:FormComponent
  }
];



@NgModule({
  declarations: [ FormComponent, ListComponent],
  imports: [
    
    CommonModule,
    
    MatTableModule,
    
    MatPaginatorModule,

    RouterModule.forChild(routes),
    
    MatSortModule,
    
    MatInputModule,
    
    MatButtonModule,
    
    MatSelectModule,
    
    MatRadioModule,
    
    MatCardModule,

    MatIconModule,
    
    ReactiveFormsModule
  ]
})
export class ProductModule { }
