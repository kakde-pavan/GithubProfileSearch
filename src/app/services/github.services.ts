import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
//import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable()

export class GitHubService{

    private username:string;


  constructor(private http:Http){
    console.log("GitHubService is ready...");
       // this.username='bradtraversy';
       

    }

  //    getUser(){
  //     return this.http.get('http://api.github.com/users/'+this.username)
  //      .pipe(.map((response:Response) => response.json() ));
  // }

  getUser(){
   return this.http.get('http://api.github.com/users/'+this.username)
    .pipe(.map((response:Response) => response.json() ));
}
  getRepos(){
 return this.http.get('http://api.github.com/users/'+this.username+'/repos')
  .pipe(.map((response:Response) => response.json() ));
}

upDatedUser(username:string){
this.username=username;

}


}
