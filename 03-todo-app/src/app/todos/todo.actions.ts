import { createAction, props } from "@ngrx/store";

export const add = createAction("[TODO] add", props<{text:string}>());