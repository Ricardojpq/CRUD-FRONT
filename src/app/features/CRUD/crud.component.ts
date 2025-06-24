import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../core/services/crud/crud.service';
import { first } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-crud',
  imports: [CurrencyPipe,MatTableModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price','stock'];
  products: any[] = [];
  constructor(private crudService:CrudService){}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.crudService.getProducts().pipe(first()).subscribe({
      next:(data)=> {
        this.products = data;
      },
      error:(error)=>{
        console.error('Error CRUD:',error);
        
      }
    })
  }
}
