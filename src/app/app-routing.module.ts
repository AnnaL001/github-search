import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserRepoResultComponent } from './component/user-repo-result/user-repo-result.component';
import { RepositoriesComponent } from './component/repositories/repositories.component';
import { UsersComponent } from './component/users/users.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:username',
    component: UserRepoResultComponent
  },
  {
    path: 'repositories',
    component: RepositoriesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
