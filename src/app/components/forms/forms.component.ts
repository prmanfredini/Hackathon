import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  nome : string = "";
  contato : string = "";
  texto : string = "";

  setNome(evento: KeyboardEvent) {
    this.nome = (<HTMLInputElement>evento.target).value;
  }

  getNome(){
    return this.nome;
  }

  setTexto(evento: KeyboardEvent) {
    this.texto = (<HTMLInputElement>evento.target).value;
  }

  getTexto() {
    return this.texto;
  }

  setContato(evento: KeyboardEvent) {
    this.contato = (<HTMLInputElement>evento.target).value;
  }

  getContato() {
    return this.contato;
  }

  contatoNovo(evento1: MouseEvent) {

    alert( "Mensagem enviada "+ this.getNome() + " entraremos em contato. " );

    }


  ngOnInit(): void {
  }

}
