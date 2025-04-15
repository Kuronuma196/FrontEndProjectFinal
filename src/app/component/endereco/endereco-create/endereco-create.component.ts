import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco.model';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.css']
})
export class EnderecoCreateComponent implements OnInit {
 endereco: Endereco = {
  bairro:'',
  cep: '',
  cidade: '',
  estado:'',
  pais: '',
  rua:'',
  numero:0,
  complemento:'',
  }

  //importando productService
  constructor(private enderecoService: EnderecoService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createEndereco(): void {
    this.enderecoService.create(this.endereco).subscribe(() => {
      this.enderecoService.showMessage('Endereço adicionado!')
      this.router.navigate(['/endereco'])
    })
  }

  cancel(): void {
    this.router.navigate(['/endereco'])
  }
}
