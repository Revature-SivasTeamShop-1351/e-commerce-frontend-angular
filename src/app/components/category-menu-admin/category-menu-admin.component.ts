import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-menu-admin',
  templateUrl: './category-menu-admin.component.html',
  styleUrls: ['./category-menu-admin.component.css']
})
export class CategoryMenuAdminComponent implements OnInit {

  productCategories: ProductCategory[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('product categories =' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }


}
