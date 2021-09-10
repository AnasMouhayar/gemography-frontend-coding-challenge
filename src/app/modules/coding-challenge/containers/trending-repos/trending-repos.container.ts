import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as internal from 'assert';
import { Repository, trendingReposState } from '../../shared/interfaces';
import { GetItems } from '../../shared/store/actions/trending-repos.actions';
import { TrendingReposSandbox } from './trending-repos.sandbox';


@Component({
  selector: 'app-trending-repos',
  templateUrl: './trending-repos.container.html',
  styleUrls: ['./trending-repos.container.scss']
})
export class TrendingReposContainer implements OnInit {

  private trendingRepos: Repository[];
  private page: number = 1;


  constructor(private TrendingReposSandbox: TrendingReposSandbox,private store: Store<trendingReposState>) {
    this.TrendingReposSandbox.getRepos().subscribe(data => (this.trendingRepos = data.items));
  }

  ngOnInit() {
    this.TrendingReposSandbox.loadReposPage(this.page,"stars")
  }


  selectData() {
    this.page++;
    this.TrendingReposSandbox.loadReposPage(this.page,"stars")
  }
}
