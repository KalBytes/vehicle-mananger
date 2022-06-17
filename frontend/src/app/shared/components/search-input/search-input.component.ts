import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() searchTermChanges: EventEmitter<any> = new EventEmitter();
  @Input() descriptionTitle: string;
  public searchForm: FormGroup;
  public searchFormSub: Subscription;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.listenToSearchTermChanges();
  }

  ngOnDestroy() {
    this.searchFormSub.unsubscribe();
  }

  private createForm() {
    this.searchForm = this.fb.group({
      searchInput: new FormControl(''),
    });
  }

  public listenToSearchTermChanges(): void {
    this.searchFormSub = this.searchForm
      .get('searchInput')
      .valueChanges.pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((v: string) => this.searchTermChanges.emit(v));
  }
}
