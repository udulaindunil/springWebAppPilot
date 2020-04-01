import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl ="http://localhost:8080/onlineBooks/books";

  constructor(private httpClient:HttpClient) {
   
  }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<GetResponseBooks>(this.baseUrl).pipe(
      map(response=> response._embedded.books)
    );
  }
}

interface GetResponseBooks{
  _embedded:{
    books: Book[];
  }
}

