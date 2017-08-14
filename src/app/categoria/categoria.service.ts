import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  constructor(private http: Http) { }
  
  getCategorias(){
    return this.http.get("http://localhost:8080/categoria")
    .map(dados => dados.json())
  }

}
