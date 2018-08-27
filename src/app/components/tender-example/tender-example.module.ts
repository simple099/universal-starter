import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'tender-example',
  template: `<h3>Tender example module</h3>`
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
