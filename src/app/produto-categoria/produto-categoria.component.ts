import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../produto/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-categoria',
  templateUrl: './produto-categoria.component.html',
  styleUrls: ['./produto-categoria.component.css'],
  providers:[ProdutoService]
})
export class ProdutoCategoriaComponent implements OnInit {

  produtos:any;

  constructor(public produtoService:ProdutoService,private route: ActivatedRoute) { }

  ngOnInit() {
    let me = this;
    this.route.params.subscribe((params:any) => {
      this.produtoService.getProdutosPorCategoria(parseInt(params['id'])).subscribe(dados => me.produtos = dados);
    });
  }

}
