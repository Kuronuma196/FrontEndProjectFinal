import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { ForcenedorService } from '../forcenedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent {
  fornecedor!: Fornecedor[]
  displayedColumns = ['id', 'nome_fantasia', 'cnpj', 'razao_social', 'status', 'action']

  constructor(private forcenedorService: ForcenedorService) { }

  ngOnInit(): void {
    this.forcenedorService.read().subscribe(fornecedor => {
      this.fornecedor = fornecedor
      console.log(fornecedor)  
    })
  }
}
