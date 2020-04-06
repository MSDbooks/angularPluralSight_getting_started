import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public pageTitle: string = 'product detail';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');

    this.pageTitle+= ` : ${id}`;

    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'description': 'mo mo mo mo mo',
      'releaseDate': 'March 19, 2019',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    }

  }

  public onBack(): void {
    this.router.navigate(['./products']);
  }

}
