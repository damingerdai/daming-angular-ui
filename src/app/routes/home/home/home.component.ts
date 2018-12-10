import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  gridListCols$: Observable<number>;

  tiles = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.gridListCols$ = of(4);
    breakpointObserver.observe([, Breakpoints.XSmall]).subscribe(result => {
      if (result.matches) {
        this.gridListCols$ = of(1);
      } else {
       // this.gridListCols$ = of(4);
      }
    });

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium]).subscribe(result => {
      if (result.matches) {
        this.gridListCols$ = of(2);
      } else {
       // this.gridListCols$ = of(4);
      }
    });

    breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge]).subscribe(result => {
      if (result.matches) {
        this.gridListCols$ = of(4);
      } else {
       // this.gridListCols$ = of(4);
      }
    });
  }

  ngOnInit() {
    //this.gridListCols$ = of(4);
  }

  ngOnDestroy(): void {
    //this.gridListCols$.
  }


}
