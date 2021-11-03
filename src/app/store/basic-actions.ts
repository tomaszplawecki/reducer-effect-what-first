import { createAction, props } from '@ngrx/store';

enum BasicActionTypes {
  SIMPLE_ACTION = '[BASIC] SIMPLE_ACTION',
}

export class BasicActions {
  static simpleAction = createAction(
    BasicActionTypes.SIMPLE_ACTION,
    props<{ value: string }>()
  );
}
