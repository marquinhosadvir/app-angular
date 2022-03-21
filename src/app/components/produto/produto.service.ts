import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { LocalStorage } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { ApiUrl } from 'src/app/enums/api.enum';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = ApiUrl.PRODUTO

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto)
  }

  read(): Observable<Produto[]> {
    let produtos: Produto[] = []

    return this.http.get<Produto[]>(this.baseUrl)
  }

  consultar(): Array<Produto> {
    let produtos: Produto[] = [];
    for (let i = 0; i < LocalStorage.length; i++) {
      produtos.push(
        // JSON.parse(
        //   localStorage.getItem(
        //     localStorage.key(i)
        //   )
        // )
      );

    }

    // return this.http.get<Produto[]>(this.baseUrl)
    return produtos;
  }
}
