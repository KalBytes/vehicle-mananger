import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { USER_DISPLAY_COLUMNS } from '../../constant';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../types';
import { UsersService } from 'src/app/state/users-state/users-service';
import { UsersQuery } from 'src/app/state/users-state/users-query';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  public userColumns = USER_DISPLAY_COLUMNS;
  public fullUserList: User[];
  public userListToDisplay: User[];

  private allUserSub: Subscription;
  private filterUserSub: Subscription;

  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly userQuery: UsersQuery
  ) {}

  ngOnInit() {
    this.usersService.getAllUsers();
    this.allUserSub = this.userQuery.selectAll().subscribe((users: User[]) => {
      this.fullUserList = users;
      this.userListToDisplay = this.fullUserList;
    });
  }

  ngOnDestroy() {
    this.allUserSub.unsubscribe();
    if (this.filterUserSub) {
      this.filterUserSub.unsubscribe();
    }
  }

  public onUserSelected(user: User): void {
    this.router.navigate([`users/${user.id}`]);
  }

  public onSearchChanges(searchValue: string): void {
    // If no search term show the full list
    if (!searchValue.length) {
      this.userListToDisplay = this.fullUserList;
      return;
    }
    this.filterUserSub = this.usersService
      .searchUserByName(searchValue)
      .subscribe((users: User[]) => {
        this.userListToDisplay = users;
      });
  }
}
