import { Component } from '@angular/core';
import { SideMenu } from '../../models/sidemenu.model';
import { AuthService } from '../../services/auth.service';
import { SideMenuConfig } from './sidemenu.config';
import { version } from '../../../../../package.json';
import { Observable } from 'rxjs';
import { User } from '../../models/auth.model';
import { UserService } from '../../services/user.service';

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
    this.userService.getUserData().subscribe();
    this.user$ = this.userService.user$;
    this.pages = this.sideMenuConfig.pages;
  }
}
