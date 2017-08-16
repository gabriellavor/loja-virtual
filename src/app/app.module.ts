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
import { BoxService } from './box/box.service';
import { ProdutoComponent } from './produto/produto.component';
//Rotas
import { routing } from './app.routing';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ToolbarComponent,
    BoxComponent,
    TopoComponent,
    RodapeComponent,
    ProdutoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CategoriaService,BoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
