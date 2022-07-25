import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: {
    user: User
  }[] = [];

  @Input() userInfo!: User;



  constructor(private route: ActivatedRoute, private profileService: ProfileService, private user: User) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.loadProfileById();
    });
  }
loadProfileById(){
  const userId: number = +this.route.snapshot.paramMap.get('id')!;
  this.profileService.loadProfileById(userId).subscribe(
    data => {
      this.user = data;
    }
  )
  


}
}
