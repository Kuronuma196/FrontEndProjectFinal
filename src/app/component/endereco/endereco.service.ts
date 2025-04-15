import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from './endereco.model';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService { baseUrl = "http://localhost:3001/endereco"

constructor(private snarkBar: MatSnackBar, private http:HttpClient) { }

showMessage(msg:string):void{
  this.snarkBar.open(msg,'X',{
    duration:3000,
    horizontalPosition:"right",
    verticalPosition:"top"
  })
}

create(endereco:Endereco):Observable<Endereco>{
  return this.http.post<Endereco>(this.baseUrl, endereco)
}

read():Observable<Endereco[]>{
  return this.http.get<Endereco[]>(this.baseUrl)
}

readById(id:string):Observable<Endereco>{
  const url =`${this.baseUrl}/${id}`
  return this.http.get<Endereco>(url)
}
update(endereco: Endereco): Observable<Endereco>
{
  const url = `${this.baseUrl}/${endereco.id}`
  return this.http.put<Endereco>(url, endereco)
}
delete(id: number): Observable<Endereco>
{
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Endereco>(url)
}
}
