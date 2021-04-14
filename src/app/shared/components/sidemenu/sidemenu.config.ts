import { Injectable } from '@angular/core';
import { SideMenu } from '../../models/sidemenu.model';
@Injectable({
  providedIn: 'root',
})
export class SideMenuConfig {
  pages: SideMenu[] = [];

  constructor() {
    this.pages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'person',
      },
      {
        title: 'Products',
        url: '/products',
        icon: 'fast-food',
      },
    ];
  }
}
