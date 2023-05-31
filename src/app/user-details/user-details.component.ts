import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  data="";
  constructor(private route:ActivatedRoute,private router: Router){}

 
  ngOnInit(){
    console.log(this.route.snapshot.params);
    this.data=this.route.snapshot.params['id'];

    console.log(this.router.url);
    console.log( window.location.href);
  }
}
