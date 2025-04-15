import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { ForcenedorService } from '../forcenedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {
  fornecedor: Fornecedor = {
    nome_fantasia: '',
    cnpj: '',
    razao_social:'' ,
    status:'',
  }

  //importando productService
  constructor(private fornecedorService: ForcenedorService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor adicionado!')
      this.router.navigate(['/fornecedor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }

}
