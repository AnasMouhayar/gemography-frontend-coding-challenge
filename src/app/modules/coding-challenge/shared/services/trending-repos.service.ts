import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TrendingReposService {
    constructor(private http: HttpClient) { }
    getAll(page, sort = "stars"): Observable<any>  {
        return this.http.get(
            `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=${sort}&order=desc&page=${page}`
        );
    }
}