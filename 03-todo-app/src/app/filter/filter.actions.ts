import { createAction, props } from '@ngrx/store';

export enum validFilters {
  ALL = 'all',
  COMPLETE = 'completes',
  PENDING = 'pending',
}

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: string }>()
);
