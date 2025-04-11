import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forma_pagamento } from './forma_pagamento.model';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  baseUrl = "http://localhost:3001/forma_pagamento"

  constructor(private snarkBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg:string):void{
    this.snarkBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  create(product:Forma_pagamento):Observable<Forma_pagamento>{
    return this.http.post<Forma_pagamento>(this.baseUrl, product)
  }

  read():Observable<Forma_pagamento[]>{
    return this.http.get<Forma_pagamento[]>(this.baseUrl)
  }

  readById(id:string):Observable<Forma_pagamento>{
    const url =`${this.baseUrl}/${id}`
    return this.http.get<Forma_pagamento>(url)
  }
  update(forma_pagamento: Forma_pagamento): Observable<Forma_pagamento>
  {
    const url = `${this.baseUrl}/${forma_pagamento.id}`
    return this.http.put<Forma_pagamento>(url, forma_pagamento)
  }
  delete(id: number): Observable<Forma_pagamento>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Forma_pagamento>(url)
  }
}
