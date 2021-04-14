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
        title: 'Products',
        url: '/products',
        icon: 'people',
      },
      {
        title: 'Profile',
        url: '/profile',
        icon: 'person',
      },
    ];
  }
}
