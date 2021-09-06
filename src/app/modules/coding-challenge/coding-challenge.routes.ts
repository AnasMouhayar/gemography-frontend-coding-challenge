import { ChallengeRoutesNames } from './coding-challenge.routes.names';
import { TrendingReposContainer } from './containers/trending-repos/trending-repos.container';

export const CHALLENGE_ROUTES = [      
    {
        path: '',
        redirectTo: 'trending-repos', 
        pathMatch: 'full'
    },
    {
        path: ChallengeRoutesNames.TRENDING_REPOS,
        component: TrendingReposContainer,
    }
];