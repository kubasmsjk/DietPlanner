import { Injectable } from "@angular/core";
import { Post } from "./admin-panel.component";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){}
    
    getPosts(): Observable<Array<Post>>{
       return this.http.get<Array<Post>>("http://localhost:3000/posts");
    }
    getPost(id:number){

    }
    getPostByUser(userId: number){

    }
    addPost(post: Post){

    }
    updatePost(post: Post){

    }
    deletePost(id: number){

    }
    changePost(post: Post){
        
    }
}