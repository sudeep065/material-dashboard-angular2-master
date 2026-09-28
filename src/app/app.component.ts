import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const analytics = (<any>window).ga;
        if (typeof analytics === 'function') {
          analytics('set', 'page', event.urlAfterRedirects);
          analytics('send', 'pageview');
        }
      }
    });
  }
}
