import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})


export class InputComponent implements OnInit {

  @Input()  desdeApp: string = '';
  @Input()  imagen: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://st2.depositphotos.com/47577860/47007/v/600/depositphotos_470073628-stock-illustration-avatar-contact-default-icon-in.jpg'
  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.imagen = this.imageDefault
  }

  imgLoaded(){
    console.log('log del hijo');
    this.loaded.emit(this.imagen);
  }

}
