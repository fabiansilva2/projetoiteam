import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PedidoListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PedidoListComponent]
})
export class PedidoModule { }
