import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../types';
import { UsersService } from 'src/app/state/users-state/users-service';

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.scss'],
})
export class SingleUserPageComponent implements OnInit {
  public user$: Observable<User>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UsersService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.userService.getUserById(id);
  }
}
