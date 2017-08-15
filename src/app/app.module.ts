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
//Outros


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ToolbarComponent,
    BoxComponent,
    TopoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CategoriaService,BoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
