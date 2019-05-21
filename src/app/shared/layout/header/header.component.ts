import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../../core/service/auth/auth.service';
import { PlatformLocation } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'app/core/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  headerOptions: any;
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public auth: AuthService,
    private location: PlatformLocation,
    private http: HttpClient,
    private apiService: ApiService
  ) { 
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
    this.apiService.ngUnsubscribe.next();
    this.apiService.ngUnsubscribe.complete();
  }

  logout() {
    this.auth.logout();
  }
}
