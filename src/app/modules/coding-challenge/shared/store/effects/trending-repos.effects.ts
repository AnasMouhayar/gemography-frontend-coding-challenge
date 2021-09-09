import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from '../actions/trending-repos.actions';
import { TrendingReposService } from '../../services/trending-repos.service';

@Injectable()
export class ReposEffects {
    constructor(
        private actions$: Actions,
        private trendingReposService: TrendingReposService
    ) { }

    @Effect()
    loadRepos$ = this.actions$.pipe(
        ofType(ActionTypes.LoadItems),
        mergeMap(({ payload: { page, sort } }) =>
            this.trendingReposService.getAll(page, sort).pipe(
                map(repos => {
                    return { type: ActionTypes.LoadSuccess, payload: repos.items };
                }),
                catchError(() => EMPTY)
            )
        )
    );
}