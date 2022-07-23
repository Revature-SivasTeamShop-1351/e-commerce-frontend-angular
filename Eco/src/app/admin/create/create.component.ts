import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
  product: Product ={
    id: "",
    name: "",
    quantity: 0,
    unitPrice: 0,
    description: "",
    imageUrl: "",
    active: false,
    sku: "",
    dateCreated: new Date(0),
    lastUpdated: new Date(0)

    };
    constructor(private productService: ProductService,
      private activedRoute: ActivatedRoute,
      private router: Router,
      private httpClient: HttpClient) { }
  
    ngOnInit(): void {
    }
  
    create(){
  this.productService.create(this.product).subscribe({
    next:(product) =>{
      this.router.navigate(['admin', 'product'])
    },
    error:(err) =>{
      console.log(err);
    }
  })
    }
  }