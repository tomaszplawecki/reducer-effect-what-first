import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BasicState } from './basic-reducers';

export class BasicSelectors {
  private static STATE = createFeatureSelector<BasicState>('BASIC_FEATURE_KEY');

  static VALUE = createSelector(
    BasicSelectors.STATE,
    (state: BasicState) => state.value
  );
}
