import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl ="http://localhost:8080/onlineBooks/books";

  private categoryUrl = "http://localhost:8080/onlineBooks/bookCategories";

  constructor(private httpClient:HttpClient) {
   
  }

  getBooks(theCategoryId: number): Observable<Book[]>{

    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(response=> response._embedded.books)
    );
  }
  
  
  getBookCategories(): Observable<BookCategory[]>{
  
   return this.httpClient.get<GetResponseBookCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.bookCategories));
  }


}


interface GetResponseBooks{
  _embedded:{
    books: Book[];
  }
}

interface GetResponseBookCategory{
  _embedded:{
    bookCategories: BookCategory[];
  }
}

