import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserGeneralInfoComponent } from './component/user-general-info/user-general-info.component';
import { UserRepoResultComponent } from './component/user-repo-result/user-repo-result.component';
import { RepositoriesComponent } from './component/repositories/repositories.component';
import { SearchRepoComponent } from './component/search-repo/search-repo.component';
import { RepoComponent } from './component/repo/repo.component';
import { UsersComponent } from './component/users/users.component';
import { SearchUserComponent } from './component/search-user/search-user.component';
import { UserResultComponent } from './component/user-result/user-result.component';
import { DatePassedPipe } from './pipe/date-passed.pipe';
import { HighlightDirective } from './directive/highlight.directive';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserGeneralInfoComponent,
    UserRepoResultComponent,
    RepositoriesComponent,
    SearchRepoComponent,
    RepoComponent,
    UsersComponent,
    SearchUserComponent,
    UserResultComponent,
    DatePassedPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
