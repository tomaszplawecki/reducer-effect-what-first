import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { BasicActions } from './basic-actions';
import { BasicFacade } from './basic-facade';

@Injectable()
export class BasicEffects {

  simpleAction$ = createEffect(() =>
    this._actions$.pipe(
      ofType(BasicActions.simpleAction),
      withLatestFrom(this._facade.value$),
      map(([action, value]) => console.log('effect', value)),
    ), { dispatch: false }
  );

  constructor(
    private _actions$: Actions,
    private _facade: BasicFacade,
  ) {
  }
}
