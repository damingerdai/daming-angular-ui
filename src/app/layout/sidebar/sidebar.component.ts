import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

import { Subscription } from 'rxjs';

import { MenuService } from '../../core/menu/menu.service';
import { IMenu } from '../../routes/menu';

import { LayoutService } from '../../core/layout/layout.service';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ],
})
export class SidebarComponent implements OnInit, OnDestroy {

  private _opended = true;

  @ViewChild('sideNav', { static: false })
  sideNav: MatSidenav;

  @Input()
  set opended(opended: boolean) {
    this._opended = opended;
  }

  get opended(): boolean {
    return this._opended;
  }

  menus: Array<IMenu>;
  mode = 'side ';

  subscriptions: Subscription[] = [];

  constructor(public menuService: MenuService,
    private layoutService: LayoutService) {
    this.menus = this.menuService.getMenu();
    // this.menuSubscription = this.menuService.menus$.subscribe(menus => this.menus = menus);
    this.subscriptions.push(this.menuService.menus$.subscribe(menus => this.menus = menus));
    this.subscriptions.push(
      this.layoutService.screenSize$.subscribe(result => {
        if (result === 'xsamll' || result === 'samll') {
          this.mode = 'over';
        } else {
          this.mode = 'side';
        }
      })
    );

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
      this.subscriptions = [];
    }
  }

}
