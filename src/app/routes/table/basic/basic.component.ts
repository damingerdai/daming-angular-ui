import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import { AddressService } from '../../../core/address/address.service';




@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  displayedColumns: string[] = ['province', 'city', 'subCity', 'action'];
  emailsDataSource = new MatTableDataSource<any>();
  currentPage: PageEvent;
  currentSort: Sort;
  totalCount: number;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(
    private httpClient: HttpClient,
    private addressService: AddressService) { }

  ngOnInit() {
    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    this.getIssuees();

    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      this.currentPage = page;
      this.getIssuees();
    });
  }

  changeSort(sortInfo: Sort) {
    // 因為API排序欄位是created，因此在這邊做調整
    if (sortInfo.active === 'created_at') {
      sortInfo.active = 'created';
    }
    this.currentSort = sortInfo;
    this.getIssuees();
  }

  getIssuees() {
    const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    if (this.currentSort.direction) {
      targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    }
    this.isLoadingResults = true;
    this.httpClient
      .get<any>(targetUrl)
      .pipe(
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      )
      .subscribe(data => {
        this.totalCount = data.total_count;
        this.emailsDataSource.data = data.items;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }

}
