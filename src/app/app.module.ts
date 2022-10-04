import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './page/index/index.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    IndexComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
