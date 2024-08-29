import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: IProduct[];
  displayedColumns =  ["id", "name", "price", "action"]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(producs => {
      this.products = producs
      console.log(producs)
    });
  }

}
