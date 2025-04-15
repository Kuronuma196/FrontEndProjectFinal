import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor.model';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ForcenedorService { 
  
  baseUrl = "http://localhost:3001/fornecedor"

constructor(private snarkBar: MatSnackBar, private http:HttpClient) { }

showMessage(msg:string):void{
  this.snarkBar.open(msg,'X',{
    duration:3000,
    horizontalPosition:"right",
    verticalPosition:"top"
  })
}

create(fornecedor:Fornecedor):Observable<Fornecedor>{
  return this.http.post<Fornecedor>(this.baseUrl, fornecedor)
}

read():Observable<Fornecedor[]>{
  return this.http.get<Fornecedor[]>(this.baseUrl)
}

readById(id:string):Observable<Fornecedor>{
  const url =`${this.baseUrl}/${id}`
  return this.http.get<Fornecedor>(url)
}
update(fornecedor: Fornecedor): Observable<Fornecedor>
{
  const url = `${this.baseUrl}/${fornecedor.id}`
  return this.http.put<Fornecedor>(url, fornecedor)
}
delete(id: number): Observable<Fornecedor>
{
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Fornecedor>(url)
}
}
