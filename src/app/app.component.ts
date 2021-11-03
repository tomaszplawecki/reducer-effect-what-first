import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { BasicActions } from './store/basic-actions';
import { BasicFacade } from './store/basic-facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value$ = this._basicFacade.value$.pipe(
    tap((value) => console.log('component', value))
  );

  constructor(
    private _store: Store,
    private _basicFacade: BasicFacade,
  ) {
  }

  runAction(): void {
    this._store.dispatch(BasicActions.simpleAction({ value: 'foo' }));
  }
}
