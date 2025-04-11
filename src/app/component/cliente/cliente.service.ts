import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:3001/cliente"

  constructor(private snarkBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg:string):void{
    this.snarkBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }

  read():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  readById(id:string):Observable<Cliente>{
    const url =`${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }
  update(cliente: Cliente): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }
  delete(id: number): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }
}
