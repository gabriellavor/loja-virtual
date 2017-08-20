import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Componentes
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BoxComponent } from './box/box.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
//Serviços
import { CategoriaService } from './categoria/categoria.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoComponent } from './produto/produto.component';
//Rotas
import { routing } from './app.routing';
import { PrincipalComponent } from './principal/principal.component';
import { BuscaProdutosComponent } from './busca-produtos/busca-produtos.component';

import { ComboBoxModule } from 'ng2-combobox';
import { Erro404Component } from './erro404/erro404.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ToolbarComponent,
    BoxComponent,
    TopoComponent,
    RodapeComponent,
    ProdutoComponent,
    PrincipalComponent,
    BuscaProdutosComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ComboBoxModule
  ],
  providers: [CategoriaService,ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
