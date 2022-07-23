import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  constructor(private route: ActivatedRoute,
    private router:Router,
    private productService: ProductService) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getById(id);
      });
    }

    getById(id: number) {
      this.productService.getSingleProduct(id).subscribe((data) => {
        this.product = data;
      });
    }
    update() {
      this.productService.update(this.product)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/fruits/home"]);
        },
        error:(err) => {
          console.log(err);
        }
      })
    }
  }