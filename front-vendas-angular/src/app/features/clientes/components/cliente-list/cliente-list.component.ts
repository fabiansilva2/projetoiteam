import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../core/services/cliente.service';
import { Cliente } from '../../../../core/models/cliente.model';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
  exportarPDF() {
    const doc = new jsPDF();
    
    // Configurar o título do PDF
    doc.text('Lista de Clientes', 14, 20);

    // Definir as colunas da tabela
    const colunas = ['Nome', 'Email', 'Telefone', 'Endereço'];
    const linhas = this.clientes.map(cliente => [
      cliente.nome,
      cliente.email,
      cliente.telefone,
      cliente.endereco
    ]);

    // Gerar a tabela no PDF
    (doc as any).autoTable({
      head: [colunas],
      body: linhas,
      startY: 30
    });

    // Salvar o PDF
    doc.save('clientes.pdf');
  }

}
