
import { Injectable } from '@angular/core';
import { ApiService, VERSION, ENDPOINT } from '../api/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersService {
  userInfo$: BehaviorSubject<any>;

  constructor(
    private api: ApiService,
  ) {
    this.userInfo$ = new BehaviorSubject<any>(null);
  }

  getCurrentUser(options = {}) {
    return this.api.get(['fe.json'], options).subscribe((user: any) => {
      this.userInfo$.next(user);
    });
  }
}

export const USERS_PROVIDERS: any[] = [
  UsersService
];
