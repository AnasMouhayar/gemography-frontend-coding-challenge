import { Action } from '@ngrx/store';
    
    export enum ActionTypes {
      LoadItems = '[Repos] Load items from server',
      LoadSuccess = '[Repos] Load success',
    }
    
    export class GetItems implements Action {
      readonly type = ActionTypes.LoadItems;
      constructor(public payload: { page: number; sort: string }) {}
    }
    
    export class LoadItems implements Action {
      readonly type = ActionTypes.LoadSuccess;
      constructor(public payload: any[]) {}
    }
    
    export type ActionsUnion = LoadItems | GetItems;