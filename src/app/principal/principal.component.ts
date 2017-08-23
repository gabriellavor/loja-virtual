import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  valorLista : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onMudouStatus(evento){
    this.valorLista = evento;
  }

}
