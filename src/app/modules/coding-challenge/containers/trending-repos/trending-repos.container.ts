import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as internal from 'assert';
import { GetItems } from '../../shared/store/actions/trending-repos.actions';
import { TrendingReposSandbox } from './trending-repos.sandbox';


@Component({
  selector: 'app-trending-repos',
  templateUrl: './trending-repos.container.html',
  styleUrls: ['./trending-repos.container.scss']
})
export class TrendingReposContainer implements OnInit {

  trendingRepos: any[];
  page: number = 1;


  constructor(private TrendingReposSandbox: TrendingReposSandbox,private store: Store<{ repos: any }>) {
    this.TrendingReposSandbox.getRepos().subscribe(data => (this.trendingRepos = data.items));
  }

  ngOnInit() {
    this.TrendingReposSandbox.loadReposPage(1,"stars")
  }


  selectData(){
    console.log(this.trendingRepos)
    this.page++;
    this.TrendingReposSandbox.loadReposPage(this.page,"stars")
  }
}
