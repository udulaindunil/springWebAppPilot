import { Component, OnInit } from '@angular/core';
import { BookCategory } from '../common/book-category';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.css']
})
export class NavigationsComponent implements OnInit {

  bookCategories : BookCategory[];

  constructor(private bookService:BookService) { 
  }


  ngOnInit(): void {
    this.litsBookCategories();
  }

  litsBookCategories(){
    this.bookService.getBookCategories().subscribe(response=>{
      this.bookCategories=response
      response.forEach(x=>{console.log(x);
      })
      
    });
  }

}
