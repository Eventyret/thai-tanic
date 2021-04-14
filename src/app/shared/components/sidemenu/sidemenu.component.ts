import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { version } from '../../../../../package.json';
import { User } from '../../models/auth.model';
import { SideMenu } from '../../models/sidemenu.model';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { SideMenuConfig } from './sidemenu.config';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  providers: [SideMenuConfig],
})
export class SidemenuComponent {
  user$: Observable<User>;
  selectedIndex: number;
  version = version;
  pages: SideMenu[];
  constructor(
    public authService: AuthService,
    private userService: UserService,
    private sideMenuConfig: SideMenuConfig
  ) {
    this.user$ = this.userService.user$;
    this.pages = this.sideMenuConfig.pages;
  }
}
