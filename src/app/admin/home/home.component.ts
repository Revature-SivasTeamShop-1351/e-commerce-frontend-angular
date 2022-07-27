import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allProducts: Product[] = [];
deleteModal: any;
idTodelete: number = 0;
currentCategoryId!: number;
action: string;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.handleListProducts();
    
    this.get();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
      
    );
  }


  get(){
    //this.currentCategoryId = 3;
this.productService.getProductList(this.currentCategoryId).subscribe((data) =>{
  
this.allProducts = data;
});

  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.productService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allProducts = this.allProducts.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
  handleListProducts(){
    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      // get the "name" param string
      //this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    } else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
      //this.currentCategoryName = 'Books';
    }
}

}