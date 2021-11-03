import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { BasicSelectors } from './basic-selectors';

@Injectable({
  providedIn: 'root'
})
export class BasicFacade {
  value$ = this._store.select(BasicSelectors.VALUE).pipe(
    tap((value) => console.log('facade', value)),
  );

  constructor(
    private _store: Store,
  ) {
  }
}
