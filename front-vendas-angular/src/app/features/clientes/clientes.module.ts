import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteService } from '../../core/services/cliente.service';

@NgModule({
  declarations: 
  [
    ClienteListComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  exports: 
  [
    ClienteListComponent
    
  ]
})
export class ClienteModule { }
