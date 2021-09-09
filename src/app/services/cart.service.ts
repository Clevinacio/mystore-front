import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
        console.log(cartItem)
        return this.httpClient.post<CartItem>(this.url, JSON.stringify(cartItem), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // TODO: Remover item do carrinho usando DELETE no /customers/:id/cart/
    // TODO: Atualizar item do carrinho (quantidade) usando PUT no /customers/:id/cart/ (necessita implementar o endpoint)

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
