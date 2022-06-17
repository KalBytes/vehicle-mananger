import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserState, UsersStore } from './users-store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UserState> {
  constructor(protected store: UsersStore) {
    super(store);
  }
}
