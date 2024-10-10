import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'main-dashboard', component: MainDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
