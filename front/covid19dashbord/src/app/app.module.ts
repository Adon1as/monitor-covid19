import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashbordComponent } from './main-dashbord/main-dashbord.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import {CommonModule} from '@angular/common';
import { PlotGraphComponent } from './plot-graph/plot-graph.component';
import { HttpClientModule } from '@angular/common/http';

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    AppComponent,
    MainDashbordComponent,
    PlotGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PlotlyModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
