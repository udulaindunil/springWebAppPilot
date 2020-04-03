import { Component, OnInit } from '@angular/core';
import { BookCategory } from '../common/book-category';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  bookCategories : BookCategory[];

  constructor(private bookService:BookService) { 

  }

  ngOnInit(): void {
    this.litsBookCategories();
  }


  litsBookCategories(){
    this.bookService.getBookCategories().subscribe(response=>{
      this.bookCategories=response
      console.log(response+" Ths is the response");
      
    });
  }


}
