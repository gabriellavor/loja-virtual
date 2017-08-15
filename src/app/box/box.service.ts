import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BoxService {

  constructor(private http: Http) { }

  getProdutos(){
    return this.http.get("http://localhost:8080/produto")
    .map(dados => dados.json())
  }

}
