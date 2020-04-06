import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from  'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {


    private productUrl = 'api/products/products.json';


    constructor(private http: HttpClient){}


    public getProdutcs(): Observable<IProduct[]> {

        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=> console.log('all: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            errorMessage = `An Error ocurred:  ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is :${err.message} `
        }

        console.log(errorMessage);

        return throwError(errorMessage); 

    }
    
}