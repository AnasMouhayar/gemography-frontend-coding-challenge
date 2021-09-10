import { Repository } from ".";

export interface trendingReposStateItems {
    items: Repository[]
}

export interface trendingReposState {
    repos: trendingReposStateItems
};