import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "../product.model";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: IProduct;

  constructor(
    private producService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.producService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct() {
    this.producService.delete(this.product).subscribe(product => {
      this.product = product;
      this.producService.showMessage("Produto deletado com sucesso !");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
