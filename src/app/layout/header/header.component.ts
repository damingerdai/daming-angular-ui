import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private _opended = true;
  private  _subscription: Subscription;
  private _isMobile: boolean;

  iconName = 'menu';

  @Input()
  set opended(_opended: boolean) {
    this._opended = _opended;
    // if (!this._isMobile) {
    //   this.iconName = this._opended ?  'menu' : 'close';
    // } else {

    // }
    this.iconName = !this._isMobile && !this._opended ? 'close' : 'menu';
    this.toggle.emit(this.opended);
  }

  get opended() {
    return this._opended;
  }

  @Output()
  toggle = new EventEmitter<boolean>();

  doToggle() {
    this.opended = !this.opended;
    this.toggle.emit(this.opended);
  }

  constructor(
    private breakpointObserver: BreakpointObserver) {
      this._subscription = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
        .subscribe(result => {
          console.log(`is mobile: ${result.matches}`);
          this._isMobile = result.matches;
          console.log(`this._mobile: ${this._isMobile}`);
          console.log(`this._opended: ${this._opended}`);
          if (this._opended && result.matches) {
            this.opended = false;
          }
        });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
