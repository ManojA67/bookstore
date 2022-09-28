import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  getId:any;
  updateForm:FormGroup;

 
  

  constructor(private formBuilder:FormBuilder,private router:Router,
   
    private activatedRoute:ActivatedRoute,
    private crudApi:CrudService) {
      
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
     this.crudApi.getBook(this.getId).subscribe(res=>{
       this.updateForm.setValue({
        name:res['name'],
        price:res['price'],
        description:res['description']
     })

      });
      this.updateForm =this.formBuilder.group({
        name:['name'],
          price:['price'],
          description:['description']
      })
       
    }
     
      
  

    

  ngOnInit(): void {}
  onUpdate(){
  this.crudApi.updatebook(this.getId,this.updateForm.value).subscribe(res=>{
    console.log("Data Updated Success Full");
    this.router.navigateByUrl('/books-list')
  },(err)=>{
    console.log(err)
  })
}


}
  
 