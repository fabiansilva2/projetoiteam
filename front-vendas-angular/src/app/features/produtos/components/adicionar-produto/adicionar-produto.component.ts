import { Component } from '@angular/core';
import { ProdutoService } from '../../../../core/services/produto.service';
import { Produto } from '../../../../core/models/produto.model';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  produto: Produto = {
    nome: '',
    preco: 0,
    estoque: 0
  };

  constructor(private produtoService: ProdutoService) {}

  onSubmit() {
    this.produtoService.createProduto(this.produto).subscribe(
      response => {
        console.log('Produto adicionado com sucesso', response);
        // Redirecionar ou exibir mensagem de sucesso
      },
      error => {
        console.error('Erro ao adicionar produto', error);
      }
    );
  }
}
