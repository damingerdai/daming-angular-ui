import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { LayoutService } from '../../core/layout/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private _opended = true;
  private  _subscription: Subscription;
  private _isMobile: boolean;

  iconName = 'menu';

  @Input()
  set opended(_opended: boolean) {
    this._opended = _opended;
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
    private breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService) {
      this._subscription = this.layoutService.screenSize$.subscribe(
        result => {
          const matches = result === 'xsamll' || result === 'samll';
          this._isMobile = matches;
          if (this._opended &&  matches) {
            this.opended = false;
          } else if (!this._opended && !matches) {
            this.opended = true;
          }
        }
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
