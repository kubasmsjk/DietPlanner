import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor(private httpService: HttpService, private router: Router) { }


  getPosts(){
    this.httpService.getPosts().subscribe(posts =>{
      console.log(posts);
    });
  }

  deletePost(){

  }
  
}
export interface Post{
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}