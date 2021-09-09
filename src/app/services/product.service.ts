import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    url = 'https://mystore-fwjs.herokuapp.com/api/products/'; // api rest fake

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200'
        })
    }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.url)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }


    getProductById(id: number): Observable<Product> {
        return this.httpClient.get<Product>(this.url + id + '/')
            .pipe(
                catchError(this.handleError)
            )
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };

}
