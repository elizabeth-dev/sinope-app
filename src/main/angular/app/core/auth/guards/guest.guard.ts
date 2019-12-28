import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

import { AppState } from '../../../app.reducer';
import * as RouterActions from '../../router/actions';
import * as AuthSelectors from '../selectors';

@Injectable({
	providedIn: 'root',
})
export class GuestGuard implements CanLoad {
	constructor(private readonly store: Store<AppState>) {}
	canLoad(
		route: Route,
		segments: UrlSegment[]
	): Observable<boolean> {
		return this.store.pipe(
			select(AuthSelectors.loggedIn),
			first(),
			map((loggedIn) => {
				if (loggedIn) {
					this.store.dispatch(
						RouterActions.navigate({ path: ['/'] })
					);
				}

				return !loggedIn;
			})
		);
	}
}