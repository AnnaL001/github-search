import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SearchUserComponent } from '../component/search-user/search-user.component';
import { UserResultComponent } from '../component/user-result/user-result.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    SearchUserComponent,
    UserResultComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
