import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavigationsComponent } from './navigations/navigations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookCategoryComponent } from './book-category/book-category.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BooksComponent,
    FooterComponent,
    NavigationsComponent,
    PageNotFoundComponent,
    BookCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatSliderModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
