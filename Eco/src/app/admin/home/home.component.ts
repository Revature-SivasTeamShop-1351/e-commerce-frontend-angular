import { Component, OnInit } from '@angular/core';
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
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    
    
    this.get();
  }



  get(){
this.productService.getadminProducts().subscribe((data) =>{
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
}