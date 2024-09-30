import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrlListar = 'http://localhost:3000/api/produtos';
  private apiUrlAdicionar = 'http://localhost:3000/api/produto';

  constructor(private http: HttpClient) {}

  // Listar todos os produtos
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrlListar);
  }

  // Obter um produto por ID
  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrlListar}/${id}`);
  }

  // Adicionar um novo produto
  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrlAdicionar, produto);
  }

  // Atualizar um produto existente
  updateProduto(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrlAdicionar}/${id}`, produto);
  }

  // Deletar um produto
  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlAdicionar}/${id}`);
  }
}

