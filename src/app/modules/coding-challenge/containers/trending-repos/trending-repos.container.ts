import { Component, OnInit } from '@angular/core';
import { TrendingReposSandbox } from './trending-repos.sandbox';


@Component({
  selector: 'app-trending-repos',
  templateUrl: './trending-repos.container.html',
  styleUrls: ['./trending-repos.container.scss']
})
export class TrendingReposContainer implements OnInit {

  public contracts: any;


  constructor(private TrendingReposSandbox: TrendingReposSandbox) {

  }

  ngOnInit() {

  }


}
