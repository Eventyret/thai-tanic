import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './auth/login/login.module';
import { RegisterPageModule } from './auth/register/register.module';
import { HomePageModule } from './home/home.module';
import { ProductsPageModule } from './products/products.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { AutologinGuard } from './shared/guards/autologin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<LoginPageModule> =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutologinGuard],
  },
  {
    path: 'register',
    loadChildren: (): Promise<RegisterPageModule> =>
      import('./auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
    canLoad: [AutologinGuard],
  },
  {
    path: 'products',
    loadChildren: (): Promise<ProductsPageModule> =>
      import('./products/products.module').then((m) => m.ProductsPageModule),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
