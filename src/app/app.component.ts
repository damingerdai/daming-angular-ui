import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'damingerdai-ui';

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.router.events
       .pipe(
         filter(event => event instanceof NavigationEnd),
         map(() => this.activatedRoute),
         map((route) => {
           while (route.firstChild) {
             route = route.firstChild;
           }
           return route;
         }),
         mergeMap(route => route.data)
       ).subscribe((event) => this.titleService.setTitle('daming-' + event['title']));
   }
 
}
