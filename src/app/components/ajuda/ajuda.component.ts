import { LeisAPI } from './../../services/leis-api';
import { Component, Input, OnInit } from '@angular/core';
import { InstituicoesMulheresAPI } from 'src/app/services/instituicoes-mulheres-api';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  @Input()  leis: LeisAPI | undefined
  @Input()  institu: InstituicoesMulheresAPI | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
