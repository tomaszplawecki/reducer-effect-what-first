import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicEffects } from './store/basic-effects';
import { BasicReducers } from './store/basic-reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([BasicEffects]),
    StoreModule.forFeature('BASIC_FEATURE_KEY', BasicReducers.REDUCERS),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
