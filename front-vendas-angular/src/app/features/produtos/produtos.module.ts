import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';

@NgModule({
  declarations: [ProdutoListComponent],
  imports: [
    CommonModule
  ],
  exports: [ProdutoListComponent]
})
export class ProdutoModule { }
