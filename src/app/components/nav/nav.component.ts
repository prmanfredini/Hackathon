import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //  .pipe(
  //    map(result => result.matches),
  //    shareReplay()
  //  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

