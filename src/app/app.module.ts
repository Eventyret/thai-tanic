import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

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
    AppRoutingModule,
    HttpClientModule,
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
