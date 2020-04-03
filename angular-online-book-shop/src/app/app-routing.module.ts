import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes =[
    { path: '', redirectTo: '/books',pathMatch: 'full'},
    { path : 'books',component: BooksComponent},
    { path : 'category/:id', component: BooksComponent},
    { path : '**', component: PageNotFoundComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule{

}