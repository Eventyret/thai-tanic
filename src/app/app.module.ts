import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
export function jwtOptionsFactory(
  storage: any
): {
  tokenGetter(): string;
  allowedDomains: string[];
  disallowedRoutes: string[];
} {
  return {
    tokenGetter: (): string => {
      return storage.get(environment.TOKEN_KEY);
    },
    allowedDomains: [environment.apiURL],
    disallowedRoutes: [environment.loginEndpoint, environment.registerEndpoint],
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
