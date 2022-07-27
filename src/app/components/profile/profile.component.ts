import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  searchUserMode!: boolean;

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.searchCurrentUser();
    });

  }

  searchCurrentUser(){
    this.searchUserMode = this.route.snapshot.paramMap.has('email');

    const theEmail: string = this.route.snapshot.paramMap.get('email')!;

    //search for user
    this.productService.searchUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }


}
