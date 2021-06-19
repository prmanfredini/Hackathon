import { Component, Input, OnInit } from '@angular/core';
import { InstituicoesMulheresAPI } from 'src/app/services/instituicoes-mulheres-api';


@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  @Input()  institu: InstituicoesMulheresAPI | undefined

  listaInstitu: InstituicoesMulheresAPI[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
