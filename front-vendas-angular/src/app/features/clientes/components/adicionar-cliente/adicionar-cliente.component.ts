import { Component } from '@angular/core';
import { ClienteService } from '../../../../core/services/cliente.service';
import { Cliente } from '../../../../core/models/cliente.model';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent {
  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    endereco: ''
  };

  mensagem: string = '';  // Para exibir a mensagem de sucesso ou erro
  sucesso: boolean = false; // Indica se a operação foi bem-sucedida

  constructor(private clienteService: ClienteService) {}

  onSubmit() {
    this.clienteService.createCliente(this.cliente).subscribe(
      response => {
        alert('Cliente adicionado com sucesso');
        console.log('Cliente adicionado com sucesso', response);
        this.cliente = { nome: '', email: '', telefone: '', endereco: '' };  // Limpa o formulário
        //this.mensagem = 'Cliente cadastrado com sucesso!';  // Exibe mensagem de sucesso
        //this.sucesso = true; // Define que a operação foi bem-sucedida
      },
      error => {
        alert('Erro ao adicionar cliente - Email já cadastrado no banco de dados');
        console.error('Erro ao adicionar cliente - Email já cadastrado no banco de dados', error);
        console.log('Mensagem de erro:', this.mensagem);
        //this.mensagem = 'Erro ao cadastrar o cliente: ' + error.error.message;  // Exibe mensagem de erro
        //this.sucesso = false; // Define que houve um erro
      }
    );
  }
}