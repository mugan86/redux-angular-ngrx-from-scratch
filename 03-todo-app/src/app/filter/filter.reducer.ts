import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';
export const initialListState = 'all';
const _filterReducer = createReducer(
  initialListState,
  on(setFilter, (_, { filter }) => filter)
);

export function filterReducer(state: any = initialListState, action: any) {
  return _filterReducer(state, action);
}
