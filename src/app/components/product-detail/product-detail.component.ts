import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService
        .getProduct(+id)
        .subscribe((product) => (this.product = product));
    }
  }

  deleteProduct(): void {
    if (
      this.product &&
      confirm('Are you sure you want to delete this product?')
    ) {
      this.productService.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

  getProductDataKeys(): string[] {
    return this.product?.data ? Object.keys(this.product.data) : [];
  }
}
