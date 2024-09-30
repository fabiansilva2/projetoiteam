import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './features/clientes/components/cliente-list/cliente-list.component';
import { ProdutoListComponent } from './features/produtos/components/produto-list/produto-list.component';
import { PedidoListComponent } from './features/pedidos/components/pedido-list/pedido-list.component';
import { LoginComponent } from './features/auth/components/login.component';
import { AdicionarClienteComponent } from './features/clientes/components/adicionar-cliente/adicionar-cliente.component';
import { AdicionarProdutoComponent } from './features/produtos/components/adicionar-produto/adicionar-produto.component';
import { AdicionarPedidoComponent } from './features/pedidos/components/adicionar-pedido/adicionar-pedido.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'pedidos', component: PedidoListComponent },
  { path: 'adicionar-cliente', component: AdicionarClienteComponent },
  { path: 'adicionar-produto', component: AdicionarProdutoComponent },
  { path: 'adicionar-pedido', component: AdicionarPedidoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './features/clientes/components/cliente-list.component';
import { ProdutoListComponent } from './features/produtos/components/produto-list.component';
import { PedidoListComponent } from './features/pedidos/components/pedido-list.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'pedidos', component: PedidoListComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 */