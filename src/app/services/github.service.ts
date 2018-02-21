import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {

	private username:string;
	private client_id = 'Iv1.c80ea2098e256de5';
	private client_secret = '05c98d8b7229bdfb0445a2f835b8d3454481caa9';

	constructor( private _http: Http) {
		console.log('github service ready');
		this.username = 'kristansmith';
	}

	getUser() {
		return this._http.get("http://api.github.com/users/"
			+ this.username + "?client_id="
			+ this.client_id + "&client_secret="
			+ this.client_secret);
		.map(res => res.json());
	}
}