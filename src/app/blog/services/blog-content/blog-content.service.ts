import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BlogEntrys} from '../../interfaces/blog-entrys';

@Injectable({
    providedIn: 'root'
})
export class BlogContentService {
    public blogContent$: Observable<BlogEntrys>;

    constructor(private httpClient: HttpClient) {
        this.defineStreams();
    }

    public defineStreams() {
        this.blogContent$ = this.httpClient.get<BlogEntrys>('/assets/blog/content/content.json');
    }
}
