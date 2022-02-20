import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[TODO] Create Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; text: string }>()
);

export const deleteItem = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Toggle All Todo',
    props<{ completed: boolean }>()
  );
  