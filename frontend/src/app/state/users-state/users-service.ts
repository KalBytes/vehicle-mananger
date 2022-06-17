import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersStore } from './users-store';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/users';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(
    private readonly http: HttpClient,
    private readonly usersStore: UsersStore,
    private readonly searchService: SearchService
  ) {}

  public getAllUsers(): void {
    this.http.get(environment.usersUrl).subscribe((users: User[]) => {
      this.usersStore.set(users);
    });
  }

  public getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.usersUrl}/${userId}`);
  }

  public searchUserByName(value: string): Observable<User[]> {
    return this.searchService.search({
      entity: 'User',
      field: 'firstName',
      value,
    });
  }
}
