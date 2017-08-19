import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Constantes} from '../models/constantes';

@Injectable()
export class ProdutoService {
  
  name : string = 'produto';
  url : string = Constantes.URL_WEB_SERVICE+'/'+this.name;
  
  constructor(private http: Http) {}
  
  getProdutos(){
    let me = this;
    let action = '';
    return this.http.get(me.url+action)
    .map(dados => dados.json())
  }
  
  buscaProdutos(descricao:string){
    let me = this;
    let action = '/busca/'+descricao;
    return this.http.get(me.url+action)
    .map(dados => dados.json())
  }
  
}
