import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {



  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  updateProduct(product: IProduct):void {
    return  
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
