import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

import {TenderExampleModule} from './components/tender-example/tender-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: 'tender-example', loadChildren: './components/tender-example/tender-example.module#TenderExampleModule'},
      { path: 'tender-example/nested', loadChildren: './components/tender-example/tender-example.module#TenderExampleModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
