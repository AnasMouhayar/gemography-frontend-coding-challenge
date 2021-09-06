import { appRoutesNames } from './app.routes.names';

export const APP_ROUTES = [

  {
    path: appRoutesNames.CHALLENGE,
    loadChildren: () =>
      import('./modules/coding-challenge/coding-challenge.module').then(
        m => m.CodingChallengeModule
      ),

  },
]