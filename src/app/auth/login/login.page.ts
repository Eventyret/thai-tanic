import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  version: string = version;
  constructor() {}

  ngOnInit() {}
}
