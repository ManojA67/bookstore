import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Node js APi
  REST_API:string ="http://localhost:4000/api";
  
 
  constructor(private httpClient:HttpClient) { }
  //add recorders
  AddBook(data:Book):Observable<any>{
    let API_URL = `${this.REST_API}/add-book`;
    return this.httpClient.post(API_URL,data)
  }
  //get all book details
  getBooks(){
    return this.httpClient.get(`${this.REST_API}`);
  }

  

  //single book 

  getBook(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/read-book/${id}`;
    return this.httpClient.get(API_URL,)
  }

  // update books data

  updatebook(id:any,data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.httpClient.put(API_URL,data,)
  }

  //delete book data
  deleteBook(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL,)

  }
  
}
