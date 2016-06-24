var Rx = require('rx');

export default class HttpClientFacade {
    get(uri) {
    	var observable = Rx.Observable.fromPromise(fetch(uri));

    	return observable;
    }

    post(uri, data) {
    	throw new Error("Not yet implemented.");
    }

    delete(uri, data) {
    	throw new Error("Not yet implemented.");
    }

    put(uri, data) {
    	throw new Error("Not yet implemented.");
    }
}