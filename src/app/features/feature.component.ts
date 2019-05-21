import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth/auth.service';
import { UsersService } from 'app/core/service/users/users.service';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html'
})

export class FeatureComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser();
  }

}
