import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { API_CONFIG } from './config';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: API_CONFIG, useValue: API_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
