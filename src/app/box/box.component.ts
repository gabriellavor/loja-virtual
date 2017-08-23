import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from './../produto/produto.service';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  produtos:any;
  @Input() lista: boolean = false;

  constructor(public produtoService:ProdutoService) { }

  ngOnInit() {
    let me = this;
    this.produtoService.getProdutos().subscribe(dados => me.produtos = dados);
  }

}
