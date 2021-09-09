import { Injectable } from "@angular/core";
import { Sandbox } from '../../../../core/sandbox/base.sandbox';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { GetItems } from "../../shared/store/actions/trending-repos.actions";

@Injectable()
export class TrendingReposSandbox extends Sandbox {

  constructor(private store: Store<{ repos: any }>) {
    super();

  }

  getRepos(): Observable<any>{
    return this.store.pipe(select('repos'));
  }

  loadReposPage(page: number,sort: string) {
    this.store.dispatch(new GetItems({ page: page, sort: 'stars' }))
  }

}
