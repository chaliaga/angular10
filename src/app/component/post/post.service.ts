import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';
import { Post } from '../../interface/post';
import { stringify } from 'querystring';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    urlPost = 'https://jsonplaceholder.typicode.com';

    constructor(private httpClient: HttpClient) {
    }


    public getPostClient(): Observable<Post> {
        return this.httpClient
            .get<Post>(this.urlPost)
            .pipe(
                retryWhen(err => {
                    let retries = 3;
                    return err
                        .pipe(
                            delay(1000),
                            mergeMap(currentError => {
                                console.log('val:::', retries);
                                if (retries-- > 0) {
                                    return of(currentError);
                                } else {
                                    return throwError(currentError);
                                }
                            })
                        );
                }));
    }

    public addPost(currentPost: Post): Observable<Post> {
        return this.httpClient.post<Post>(this.urlPost + '/posts', currentPost);
    }

    public putPost(alterPost: Post): Observable<Post> {
        return this.httpClient.put<Post>(this.urlPost + '/posts/' + alterPost.id, alterPost);
    }

    public patchPost(alterPostTitle: string): Observable<Post>{
        return this.httpClient.patch<Post>(this.urlPost + '/posts/1', { title: alterPostTitle });
    }

    public deletePost(id: number): Observable<unknown> {
        return this.httpClient.delete<unknown>(this.urlPost + '/posts/' + id);
    }
}
