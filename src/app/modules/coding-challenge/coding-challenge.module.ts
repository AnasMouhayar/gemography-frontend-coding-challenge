import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { codingChallengeContainers, codingChallengeSanboxes } from './containers';
import { codingChallengeComponents } from './components';
import { CHALLENGE_ROUTES } from './coding-challenge.routes';

import { RouterModule } from '@angular/router';

import { CodingChallengeComponent } from './coding-challenge.component';



@NgModule({
  declarations: [
    ...codingChallengeContainers,
    ...codingChallengeComponents,
    CodingChallengeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CHALLENGE_ROUTES),
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
