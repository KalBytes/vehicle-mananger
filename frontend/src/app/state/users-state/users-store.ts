import { Injectable } from '@angular/core';
import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';
import { User } from 'src/app/users';

export interface UserState extends EntityState<User, string>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-store' })
export class UsersStore extends EntityStore<UserState> {
  constructor() {
    super({});
  }
}
