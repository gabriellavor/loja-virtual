import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from "@angular/router";
import { ProdutoService } from "./produto.service";
import { Produtos } from './../models/produtos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produto = new Produtos();
  private parametersObservable: any;
  
  constructor(public produtoService: ProdutoService,private route: ActivatedRoute) {}

  ngOnInit() {
    let me = this;
    this.route.params.subscribe((params:any) => {
      this.produtoService.getProduto(parseInt(params['id'])).subscribe(dados => me.produto = dados);
    });
  }
 
  
}
