import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from './../produto/produto.service';
import { Produtos } from '../models/produtos';
import { Router } from "@angular/router";

@Component({
  selector: 'app-busca-produtos',
  templateUrl: './busca-produtos.component.html',
  styleUrls: ['./busca-produtos.component.css'],
  providers:[ProdutoService]
})


export class BuscaProdutosComponent implements OnInit {
  produtos: Produtos[];
  @Output()
  select:EventEmitter<string>;
    
  constructor(public produtoService:ProdutoService,private router : Router) {
    this.produtos = [];
  }
  
  ngOnInit() {}

  buscaProdutos(descricao:string){
    let me = this;
    if(descricao != '' && descricao != undefined){
      this.produtoService.buscaProdutos(descricao).subscribe(dados => me.produtos = dados);
    }
  }

  onSelect(produto:any){
    if(produto != null){
      this.router.navigate(['produto',produto.id]);
    }
  }
}
