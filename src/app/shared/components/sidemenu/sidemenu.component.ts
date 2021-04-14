import { Component } from '@angular/core';
import { SideMenu } from '../../models/sidemenu.model';
import { AuthService } from '../../services/auth.service';
import { SideMenuConfig } from './sidemenu.config';
import { version } from '../../../../../package.json';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  providers: [SideMenuConfig],
})
export class SidemenuComponent {
  selectedIndex: number;
  version = version;
  pages: SideMenu[];
  constructor(
    public authService: AuthService,
    private sideMenuConfig: SideMenuConfig
  ) {
    this.pages = this.sideMenuConfig.pages;
  }
}
