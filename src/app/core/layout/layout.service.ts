import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Subject } from 'rxjs';

import { CoreModule } from '../core.module';


export type ScreenSize = 'xsamll' | 'samll' | 'medium' | 'large' | 'xlarge';


@Injectable({
  providedIn: CoreModule
})
export class LayoutService {

  private screenSizeSource = new Subject<ScreenSize>();

  screenSize$ = this.screenSizeSource.asObservable();

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      if (result.matches) {
        this.screenSizeSource.next('xsamll');
      }
    });

    this.breakpointObserver.observe([Breakpoints.Small]).subscribe(result => {
      if (result.matches) {
        this.screenSizeSource.next('samll');
      }
    });

    this.breakpointObserver.observe([Breakpoints.Medium]).subscribe(result => {
      if (result.matches) {
        this.screenSizeSource.next('medium');
      }
    });

    this.breakpointObserver.observe([Breakpoints.Large]).subscribe(result => {
      if (result.matches) {
        this.screenSizeSource.next('large');
      }
    });

    this.breakpointObserver.observe([Breakpoints.XLarge]).subscribe(result => {
      if (result.matches) {
        this.screenSizeSource.next('xlarge');
      }
    });
  }
}
