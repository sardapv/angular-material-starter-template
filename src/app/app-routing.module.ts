import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/after-login/after-login.module').then((m) => m.AfterLoginModule),
    // change to before if session resume is not supported in your app
  },
  {
    path: 'after-login',
    loadChildren: () => import('./features/after-login/after-login.module').then((m) => m.AfterLoginModule),
  },
  {
    path: 'before-login',
    loadChildren: () => import('./features/before-login/before-login.module').then((m) => m.BeforeLoginModule),
  },
  {
    path: '**',
    redirectTo: 'after-login', // or 404 module
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
