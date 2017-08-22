import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers:[CategoriaService]
})
export class CategoriaComponent implements OnInit {

  categorias:any;
  produtos:any;

  constructor(public categoriaService:CategoriaService){}

  ngOnInit() {
    let me = this;
    this.categoriaService.getCategorias().subscribe(dados => me.categorias = dados);
  }


}