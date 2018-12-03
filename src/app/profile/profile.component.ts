import { Component, OnInit } from '@angular/core';
import {GitHubService} from '../services/github.services';
// import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
//import{Observable,of,Subject} from 'rxjs';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {


  user[];
  repos[];
  username:string;
  constructor(private githubsl:GitHubService) {
          this.user=false;
}
serachUser(){
   this.githubsl.upDatedUser(this.username);

   this.githubsl.getUser().subscribe((user)=>{
     //console.log(user);
     this.user=user;
   })

   this.githubsl.getRepos().subscribe((repos)=>{

     this.repos=repos;
     // console.log(repos);
   })

}



}
