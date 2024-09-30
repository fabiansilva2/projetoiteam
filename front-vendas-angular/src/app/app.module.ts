import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ClienteModule } from './features/clientes/clientes.module';
import { ProdutoModule } from './features/produtos/produtos.module';
import { PedidoModule } from './features/pedidos/pedidos.module';
import { AuthModule } from './features/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdicionarClienteComponent } from './features/clientes/components/adicionar-cliente/adicionar-cliente.component';
import { AdicionarProdutoComponent } from './features/produtos/components/adicionar-produto/adicionar-produto.component';
import { AdicionarPedidoComponent } from './features/pedidos/components/adicionar-pedido/adicionar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarClienteComponent,
    AdicionarProdutoComponent,
    AdicionarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ClienteModule,
    ProdutoModule,
    PedidoModule,
    AuthModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
