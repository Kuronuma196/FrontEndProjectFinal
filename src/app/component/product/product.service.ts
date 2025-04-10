import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snarkBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg:string):void{
    this.snarkBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  create(product:Product):Observable<product>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id:string):Observable<Product>{
    const url =`${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
}
