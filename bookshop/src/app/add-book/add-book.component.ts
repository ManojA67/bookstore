import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm:FormGroup;
  
  //CrudService: any;

  constructor(private formBuilder:FormBuilder,
    private crudapi:CrudService, private router:Router) { 
      
      this.bookForm = this.formBuilder.group({
        name:[''],
        price:[''],
        description:['']


      })
    }

  ngOnInit(): void {
    //onsubmit willl directly post
    
  }
onsubmit():any{
  this.crudapi.AddBook(this.bookForm.value)
  .subscribe(()=>{
    console.log('data added successfully!')
   this.router.navigateByUrl('/books-list')// is used to target urls
  },(err: any)=>{
    console.log(err);
  
  });
}
}
