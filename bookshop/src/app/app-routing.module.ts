import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksListComponent } from './books-list/books-list.component';

import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'',redirectTo:'table',pathMatch:'full'
  },
  {
    path:'books-list',component:BooksListComponent
  },
  {
    path:'add-book',component:AddBookComponent
  },
  {
    path:'edit-book/:id',component:BookDetailComponent
  },
  {
    path:'table',component:TableComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
