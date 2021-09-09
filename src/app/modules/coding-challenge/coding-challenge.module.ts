import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { codingChallengeContainers, codingChallengeSanboxes } from './containers';
import { codingChallengeComponents } from './components';
import { CHALLENGE_ROUTES } from './coding-challenge.routes';

import { RouterModule } from '@angular/router';

import { CodingChallengeComponent } from './coding-challenge.component';
import { MaterialAngularModule } from '../angular-material/angular-material.module';
import { StoreModule } from '@ngrx/store';
import { TrendingReposReducer } from './shared/store/reducers/trending-repos.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ReposEffects } from './shared/store/effects/trending-repos.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    ...codingChallengeContainers,
    ...codingChallengeComponents,
    CodingChallengeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CHALLENGE_ROUTES),
    MaterialAngularModule,
    HttpClientModule,
    StoreModule.forRoot({ repos: TrendingReposReducer },{
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ReposEffects]),
    InfiniteScrollModule
  ],
  providers: [
    ...codingChallengeSanboxes,
  ],
  exports: [
    ...codingChallengeContainers,
    CodingChallengeComponent
  ]
})
export class CodingChallengeModule { }
