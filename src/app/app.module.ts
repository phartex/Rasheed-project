import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from './shared/shared/shared.module';
import { NotificationComponent } from './components/notification/notification.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorService } from './services/httpinterceptor.service';
import { LoaderService } from './services/loader.service';
import { FlutterwaveModule } from "flutterwave-angular-v3"

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FlutterwaveModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      // useclass: NetworkInterceptor,
      multi: true,
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
