import { Component } from '@angular/core';
import { PedidoService } from '../../../../core/services/pedido.service';
import { Pedido } from '../../../../core/models/pedido.model';

@Component({
  selector: 'app-adicionar-pedido',
  templateUrl: './adicionar-pedido.component.html',
  styleUrls: ['./adicionar-pedido.component.css']
})
export class AdicionarPedidoComponent {
  pedido: Pedido = {
    clienteId: 0,
    produtoId: 0,
    quantidade: 0,
    total: 0
  };

  constructor(private pedidoService: PedidoService) {}

  onSubmit() {
    this.pedidoService.createPedido(this.pedido).subscribe(
      response => {
        console.log('Pedido adicionado com sucesso', response);
        // Redirecionar ou exibir mensagem de sucesso
      },
      error => {
        console.error('Erro ao adicionar pedido', error);
      }
    );
  }
}


/* import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adicionar-pedido',
  templateUrl: './adicionar-pedido.component.html',
  styleUrls: ['./adicionar-pedido.component.css']
})
export class AdicionarPedidoComponent {
  pedido = {
    clienteId: null,
    produtoId: null,
    quantidade: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/pedido', this.pedido).subscribe(response => {
      console.log('Pedido adicionado com sucesso', response);
      // Redirecionar ou exibir mensagem de sucesso
    });
  }
}
 */