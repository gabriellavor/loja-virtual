import { Component, OnInit,Input } from '@angular/core';
import { ProdutoService } from './../produto/produto.service';
import { Produtos } from '../models/produtos';

@Component({
  selector: 'app-busca-produtos',
  templateUrl: './busca-produtos.component.html',
  styleUrls: ['./busca-produtos.component.css'],
  providers:[ProdutoService]
})


export class BuscaProdutosComponent implements OnInit {
  produtos: Produtos[];
  
  constructor(public produtoService:ProdutoService) {
    this.produtos = [];
  }
  
  ngOnInit() {
    
  }

  buscaProdutos(descricao:string){
    let me = this;
    if(descricao != '' && descricao != undefined){
      this.produtoService.buscaProdutos(descricao).subscribe(dados => me.produtos = dados);
    }
  }

}
