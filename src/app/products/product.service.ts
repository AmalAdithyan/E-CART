import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import behaviour subject
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
//object create for bs
search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  // api call to view all products
  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')
  }
  //apii call to view single product 
  viewProduct(productId:any){
    return this.http.get('http:localhost:3000/products/'+productId)
  }
}
