import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/tender-example">Tender_Example</a>
  <a routerLink="/tender-example/nested">Tender_Example_Nested</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
