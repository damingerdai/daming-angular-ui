import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, of, Subscription } from 'rxjs';

import { LayoutService } from '../../../core/layout/layout.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  gridListCols$: Observable<number>;
  subscription: Subscription;

  tiles = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
  ];

  constructor(
    private layoutService: LayoutService) {
    this.gridListCols$ = of(4);
    this.subscription = this.layoutService.screenSize$.subscribe(result => {
      if (result === 'xsamll') {
        this.gridListCols$ = of(1);
      } else if (result === 'samll' || result === 'medium') {
        this.gridListCols$ = of(2);
      } else if (result === 'large' || result === 'xlarge') {
        this.gridListCols$ = of(4);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
