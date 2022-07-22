import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: Array<Product>;
selectedProduct: Product;
action: string;
  constructor(private productService: ProductService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData(){
    this.productService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }
  

  handleSuccessfulResponse(response) {
    this.products = response;
  }

  addProduct(){
  this.selectedProduct = new Product();
  this.router.navigate(['admin', 'product'], { queryParams: { action: 'add' } });
}
viewProduct(id: number) {
  this.router.navigate(['admin', 'product'], { queryParams: { id, action: 'view' } });
}
}