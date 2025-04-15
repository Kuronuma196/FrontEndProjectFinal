import { Component, OnInit } from '@angular/core';
import { Forma_pagamento } from '../forma_pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent implements OnInit {
  forma_pagamento: Forma_pagamento = {
    descricao: '',
    tipo: '',
    status:''

  }

  //importando productService
  constructor(private forma_pagamentoService: FormaPagamentoService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createForma_pagamento(): void {
    this.forma_pagamentoService.create(this.forma_pagamento).subscribe(() => {
      this.forma_pagamentoService.showMessage('Pagamento criado!')
      this.router.navigate(['/forma_pagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/forma_pagamento'])
  }

}
