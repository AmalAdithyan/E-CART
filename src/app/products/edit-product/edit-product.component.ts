import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  pid: any
  pdata: any
  constructor(private ar: ActivatedRoute, private ps: ProductService, private route:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid=data["id"]
    })
    this.ps.viewProduct(this.pid).subscribe((data: any) => {
      this.pdata = data
      console.log(this.pdata)
    })
  }
  updateProduct(form: any) {
    //let update = {
      //id: form.value.id,
      //productName: form.value.productName,
      //categoryId: form.value.categoryId,
      //description: form.value.description,
      //price: form.value.price,
      //isAvailable: form.value.isAvailable,
      //productImage: form.value.productImage,
      //rating: form.value.rating,
      //review: form.value.review,
      //vendorName: form.value.vendorName,
      //warrenty: form.value.warrenty
    //}
  console.log(this.pdata)
this.ps.updateProduct(this.pid,this.pdata).subscribe((item:any)=>{
  alert("updated")
})  
}

}
