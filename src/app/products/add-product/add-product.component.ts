import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  constructor(private fb:FormBuilder){}

  ngOnInit():void{

  }

  addProductForm = this.fb.group({
    id:[""],
    productName:[""],
    categoryId:[""],
    description:[""],
    price:[""],
    isAvailable:[""],
    productImage:[""],
    rating:[""],
    review:[""],
    vendorName:[""],
    warranty:[""]
  })
  addProduct()
}

