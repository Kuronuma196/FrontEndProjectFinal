import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { FormaPagamentoCreateComponent } from './component/forma_pagamento/forma-pagamento-create/forma-pagamento-create.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "forma_pagamento",
    component: FormaPagamentoCrudComponent
  },
  {
    path: "forma_pagamento/create",
    component: FormaPagamentoCreateComponent
  },
  {
    path: "cliente",
    component: ClienteCrudComponent
  },

  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "fornecedor",
    component: FornecedorCrudComponent
  },
  
  {
    path: "fornecedor/create",
    component: FornecedorCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
