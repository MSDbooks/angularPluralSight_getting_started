import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: String = 'Product List';
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService){
      
      
    }

    public onRatingClicked(event) {
      console.log(event);
    }

    public performFilter(filterBy: string): IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();

      return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    public toggleImage(): void {

      this.showImage = !this.showImage;

    }

    public ngOnInit(): void{
      this.productService.getProdutcs().subscribe({
        next: products => {
           this.products = products,
           this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err 
      });


      
      

    }
}