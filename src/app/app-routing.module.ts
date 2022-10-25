import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RemitaComponent } from './components/remita/remita.component';
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
    path: 'remita',
    component : RemitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, TokenpageComponent, RemitaComponent]
