import { Component, Input, OnInit } from '@angular/core';
import { LeisAPI } from 'src/app/services/leis-api';

@Component({
  selector: 'app-leis',
  templateUrl: './leis.component.html',
  styleUrls: ['./leis.component.css']
})
export class LeisComponent implements OnInit {

  @Input()  leis: LeisAPI | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
