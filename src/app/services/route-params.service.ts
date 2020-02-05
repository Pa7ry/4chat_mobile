import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteParamsService {

  constructor(private _route: ActivatedRoute) { }

  public paramsObserver() {
    return this._route.snapshot.params;
    // console.log(this._route.snapshot.params);
    // const params = new Observable(observer => observer.next(this._route.snapshot.params));
    // console.log('params', params);
    // return params;
  }

}
