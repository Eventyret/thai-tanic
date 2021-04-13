import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './auth/login/login.module';
import { RegisterPageModule } from './auth/register/register.module';
import { HomePageModule } from './home/home.module';
import { IntroPageModule } from './intro/intro.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { AutologinGuard } from './shared/guards/autologin.guard';
import { IntroGuard } from './shared/guards/intro.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: (): Promise<LoginPageModule> =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [IntroGuard, AutologinGuard],
  },
  {
    path: 'register',
    loadChildren: (): Promise<RegisterPageModule> =>
      import('./auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
    canLoad: [IntroGuard, AutologinGuard],
  },
  {
    path: 'intro',
    loadChildren: (): Promise<IntroPageModule> =>
      import('./intro/intro.module').then((m) => m.IntroPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: (): Promise<HomePageModule> =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
