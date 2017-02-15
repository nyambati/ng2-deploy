import { Injectable } from '@angular/core';

// import { Http, Response } from '@angular/http';

import { Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable()
export class TodoService {

  constructor(
    // private _http: Http
  ) { }

  getAll(): Observable<Todo[]> {
    // return this._http.get('someUrl')
    //   .map((response: Response) => response.json())
    //   .catch(this._handleError);
      
    return Observable.create(observer => {
      observer.next(TODOS);
    });
  }

  // private _handleError(error) {
  //   // do some error handling
  //   return Observable.throw('There was an error');
  // }

}