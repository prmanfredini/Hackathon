import { Component, Input, OnInit } from '@angular/core';
import { InstituicoesMulheresAPI } from 'src/app/services/instituicoes-mulheres-api';
import { AjudaAPIService } from 'src/app/services/ajuda-api.service';


@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  @Input()  institu: InstituicoesMulheresAPI | undefined

  listaInstitu: InstituicoesMulheresAPI[] = [];

  constructor(public instAPI: AjudaAPIService) { }


    ngOnInit(): void {
    this.instAPI.get().subscribe({
      next: (retornoDaApi: InstituicoesMulheresAPI[]) => {
        this.listaInstitu = retornoDaApi;
      }
    });
    ​
    }
}
