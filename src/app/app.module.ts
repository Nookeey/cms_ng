import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { PagesService } from './services/pages.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [AuthService, PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
