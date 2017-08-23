import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() mudouStatus = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  mudaStatus(lista:boolean){
    this.mudouStatus.emit(lista);
  }

}
