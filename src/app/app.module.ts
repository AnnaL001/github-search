import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RepositoriesModule } from './repositories/repositories.module';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    RepositoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
