import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BoxComponent } from './box/box.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
