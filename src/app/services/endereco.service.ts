import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IEndereco } from '../interface/endereco.interface';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  url = 'http://localhost:3000/enderecos'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os endereços
  getEnderecos(): Observable<IEndereco[]> {
    return this.httpClient.get<IEndereco[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um endereco pelo id
  getEnderecoById(id: number): Observable<IEndereco> {
    return this.httpClient.get<IEndereco>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um endereco
  saveEndereco(endereco: IEndereco): Observable<IEndereco> {
    return this.httpClient.post<IEndereco>(this.url, JSON.stringify(endereco), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um endereco
  updateEndereco(endereco: IEndereco): Observable<IEndereco> {
    return this.httpClient.put<IEndereco>(this.url + '/' + endereco.id, JSON.stringify(endereco), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um endereco
  deleteEndereco(endereco: IEndereco) {
    return this.httpClient.delete<IEndereco>(this.url + '/' + endereco.id, this.httpOptions)
      .pipe(
        retry(1),
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
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
