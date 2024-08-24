import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { IProduct } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: IProduct = {
    name: "Produto do Angular",
    price: 5000,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createproduct() {
    this.productService.create(this.product).subscribe((product) => {
      this.productService.showMessage("Produto adicionado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel() {
    this.router.navigate(["/products"]);
  }
}
