import { Component } from '@angular/core';
import { Forma_pagamento } from '../forma_pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent {

  forma_pagamento!: Forma_pagamento[]
  displayedColumns = ['id', 'descricao', 'tipo', 'status', 'action']

  constructor(private forma_pagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.forma_pagamentoService.read().subscribe(forma_pagamento => {
      this.forma_pagamento = forma_pagamento
      console.log(forma_pagamento)  
    })
}
}
