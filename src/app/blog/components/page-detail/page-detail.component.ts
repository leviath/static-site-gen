import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BlogContentService} from '../../services/blog-content/blog-content.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {BlogEntry} from '../../interfaces/blog-entrys';

@Component({
    selector: 'app-page-detail',
    templateUrl: './page-detail.component.html',
    styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

    public blog$: Observable<BlogEntry>;

    constructor(private blogContentService: BlogContentService,
                private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit() {
        const routeIdentifier = this.activatedRoute.snapshot.params.detail;

        this.blog$ = this.blogContentService.blogContent$.pipe(
            map(content => {
                return content.blogEntrys.filter(blogEntrys => {
                    return blogEntrys.route === routeIdentifier;
                });
            }),
            map(content => content[0])
        );
    }
}
