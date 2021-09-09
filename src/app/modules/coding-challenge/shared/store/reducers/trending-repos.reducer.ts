import { ActionsUnion, ActionTypes } from '../actions/trending-repos.actions';


export const initialState = {
    items: []
};

export function TrendingReposReducer(state = initialState, action: ActionsUnion) {
    switch (action.type) {
        case ActionTypes.LoadSuccess:
            return {
                ...state,
                items: [...state.items, ...action.payload]
            };
        default:
            return state;
    }
}