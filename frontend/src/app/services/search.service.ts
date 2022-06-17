import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchQueryData } from '../types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private readonly http: HttpClient) {}

  public search(searchData: SearchQueryData): Observable<any[]> {
    const searchUrl = this.buildSearchString(searchData);
    return this.http.get<any[]>(searchUrl);
  }

  private buildSearchString(searchData: SearchQueryData): string {
    return `${environment.searchUrl}?entity=${searchData.entity}&field=${searchData.field}&value=${searchData.value}`;
  }
}
