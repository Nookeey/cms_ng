import { UserRoutingModule } from './user.routing.module';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {}
