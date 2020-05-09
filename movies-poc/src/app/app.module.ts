import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { API_CONFIG } from './config';
import { PanelComponent } from './components/panel/panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    DashboardComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [{provide: API_CONFIG, useValue: API_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
