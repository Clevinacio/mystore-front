import { HttpClient, HttpErrorResponse, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    customer = JSON.parse(<string>sessionStorage.getItem('customer'));
    url = `https://mystore-fwjs.herokuapp.com/api/customers/${this.customer['id']}/cart/`; // TODO: Ao logar, passar o id correto do usuário

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getCartItems(): Observable<CartItem[]> {
        return this.httpClient.get<CartItem[]>(this.url)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

    addCartItem(cartItem: CartItem): Observable<CartItem> {
        return this.httpClient.post<CartItem>(this.url, JSON.stringify(cartItem), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    cleanCartItem(product_id: number|null=null): Observable<any>{
        // Se não for passado um id, limpa todos os itens do carrinho
        return this.httpClient.request('delete', this.url, {body: JSON.stringify(product_id ? {product:product_id} : {}), headers: this.httpOptions.headers}).pipe(
            retry(2),
            catchError(this.handleError)
        )
    }

    updateCartItemQuantity(quantity: number, product_id: number): Observable<CartItem> {
      console.log(quantity, product_id);
        return this.httpClient.put<CartItem>(this.url, JSON.stringify({product: product_id, quantity: quantity}), this.httpOptions)
          .pipe(
              retry(2),
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
