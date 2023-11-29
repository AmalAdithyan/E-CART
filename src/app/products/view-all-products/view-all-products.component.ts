import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrl: './view-all-products.component.css'
})
export class ViewAllProductsComponent implements OnInit {
  productList: any
  filterProducts: any
  searchkey: any = ""

  constructor(private ps: ProductService) { }
  ngOnInit(): void {
    this.ps.viewAllProduct().subscribe(data => {
      //console.log(data);
      this.productList = data
    })
    this.ps.search.subscribe((value:any)=>{
      this.searchkey=value})
  }
  filter(category: any) {
    this.filterProducts = this.productList.filter((item: any) => item.categoryId == category || category == "")
  }
}
