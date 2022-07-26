import { Token } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentUser: User = {
    firstName: '',
    email: '',
    lastName: '',
    password: '',
    id: '',
    message: ''
  };
  
  message = '';

  constructor(private profileService: ProfileService, private router : Router) { }

  ngOnInit(): void {
  
  }

  getUser (id: string): void {
      this.profileService.getUser(id)
        .subscribe({
          next: (data) => {
            this.currentUser = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
  updateUser () : void {
    this.message = '';

    this.profileService.updateUser(this.currentUser.id, this.currentUser.email, this.currentUser.firstName, this.currentUser.lastName)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Profile updated successfully';
        },
        error: (e) => console.error(e)
      });
  }
     
  }
