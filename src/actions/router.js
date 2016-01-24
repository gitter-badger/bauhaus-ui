import * as types from '../constants/ActionTypes.js';
import superagent from 'superagent';
import superagentPlugin from '../utils/helpers/superagentPlugin.js';
import {loadError} from './config.js';
import {
	matchRoutes
}
from '../utils/router/index.js';

import store from '../store/store.js';

import createHistory from 'history/lib/createHashHistory';
let history = createHistory();
let unlisten = history.listen(location => {
	//console.log(location);
	store.dispatch(locationChanged(location))
})

function locationChanged(location) {
	return(dispatch, getState) => {
		var state = getState();
		var route = matchRoutes(state.router.routes, location);

		dispatch({
			type: types.ROUTER_LOCATION_CHANGED,
			location,
         route
		});
	}
}

/*function updateRoute(location) {
	return(dispatch, getState) => {
		var state = getState();
		var route = matchRoutes(state.router.routes, state.router.location);

		dispatch({
			type: types.ROUTER_UPDATE_ROUTE,
         route
		});
	}
}*/

export function pushLocation(location) {
	history.push(location);
	return {
		type: types.ROUTER_PUSH_LOCATION,
		location
	};
}

export function reload(routes) {
   return(dispatch, getState) => {
		var state = getState();
		dispatch(pushLocation(state.router.location));
	}
}

function setRoutes(routes) {
   return(dispatch, getState) => {
		var state = getState();
		var route = matchRoutes(routes, state.router.location);

		dispatch({
			type: types.ROUTER_SET_ROUTES,
         routes,
         route
		});
	}
}

function setLoading() {
	return {
		type: types.ROUTER_SET_LOADING
	};
}

export function loadRoutes() {
	return(dispatch, getState) => {
		var state = getState();
		if(state.router.loading === false) {
			dispatch(setLoading());
			var url = state.config.endpoints.routes.url; // TODO: Error Handling
			superagent
				.get(url)
				.accept('json')
				.use(superagentPlugin())
				.end(function(err, res) {
					if(err != null) {
						return dispatch(loadError(err, url));
					}
					var routes = {};

					if(res.body.routes != null && typeof res.body.routes === 'object') {
						routes = res.body.routes;
					}
					dispatch(setRoutes(routes));
				});
		}
		else {
			console.warn('router.loadRoutes called as it was loading!');
		}
	};
}
