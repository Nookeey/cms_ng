import { User } from './models/user';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { PagesService } from './services/pages.service';
import { AppRoutingModule } from './/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [AuthService, PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
