import { Action, createReducer, on } from '@ngrx/store';
import { BasicActions } from './basic-actions';

export class BasicState {
  value: string | undefined;
}

export const initialState: BasicState = {
  value: undefined,
};

export class BasicReducers {
  private static REDUCER = createReducer<BasicState>(
    initialState,
    on(BasicActions.simpleAction, (state, { value }) => {
      console.log('reducer', value);

      return {
        ...state,
        value,
      };
    }),
  );

  static REDUCERS = (state: BasicState, action: Action) => {
    return BasicReducers.REDUCER(state, action);
  }
}
