import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `<h3>i'm lazy</h3>`
})
export class TenderExampleComponent {}

@NgModule({
  declarations: [TenderExampleComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: TenderExampleComponent, pathMatch: 'full'}
    ])
  ]
})
export class TenderExampleModule {

}
