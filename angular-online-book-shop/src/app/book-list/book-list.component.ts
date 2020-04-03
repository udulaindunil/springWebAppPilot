import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../common/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

   books: Book[];
   currentCategoryId : number;
  constructor(private bookService:BookService,private activatedRoute : ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    })
  }

  listBooks(){

    const hasIdParam : boolean = this.activatedRoute.snapshot.paramMap.has('id');

    if(hasIdParam){
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');

    }else{
      this.currentCategoryId = 1;
    }
    
    this.bookService.getBooks(this.currentCategoryId).subscribe(response=>{
      this.books = response;
      console.log(response);
    })
  }

}
