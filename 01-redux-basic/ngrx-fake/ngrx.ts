export interface Action {
  type: string;
  payload?: any; // Params to add in specify action
}

export interface Reducer<T> {
    (state: T, action: Action): T
}