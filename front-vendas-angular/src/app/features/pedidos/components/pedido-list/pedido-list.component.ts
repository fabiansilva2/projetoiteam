import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../core/services/pedido.service';
import { Pedido } from '../../../../core/models/pedido.model';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe(data => {
      this.pedidos = data;
    }, error => {
      console.error('Erro ao buscar pedidos:', error);
    });
  }
}
