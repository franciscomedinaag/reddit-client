import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class DataApiService {

    constructor(public http: HttpClient) {}

    public get(endPoint: string): Observable<object>{
        let link: string = endPoint;
        return this.http.request('GET', link, {});
    }

}