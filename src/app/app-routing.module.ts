import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TokenpageComponent } from './components/tokenpage/tokenpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'token',
    component : TokenpageComponent
  },
  {
    path: 'history',
    component : HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, TokenpageComponent]
