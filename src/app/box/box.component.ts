import { Component, OnInit } from '@angular/core';
import { BoxService } from './box.service';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  produtos:any;

  constructor(public boxService:BoxService) { }

  ngOnInit() {
    let me = this;
    this.boxService.getProdutos().subscribe(dados => me.produtos = dados);
  }

}
