import {Component, Input, OnInit} from '@angular/core';
import {BlogEntry} from '../../interfaces/blog-entrys';
import {Observable} from 'rxjs';
import {BlogContentService} from '../../services/blog-content/blog-content.service';
import {map} from 'rxjs/operators';


@Component({
    selector: 'app-teasered-content',
    templateUrl: './teasered-content.component.html',
    styleUrls: ['./teasered-content.component.scss']
})
export class TeaseredContentComponent implements OnInit {

    @Input()
    public headline?: string;

    @Input()
    public filterTag?: string;

    @Input()
    public limit?: number;

    public blogContent$: Observable<BlogEntry[]>;

    constructor(private blogContentService: BlogContentService) {
    }

    public ngOnInit() {
        this.blogContent$ = this.blogContentService.blogContent$.pipe(
            map(blogContent => blogContent.blogEntrys.sort((a, b) => {
                    return new Date(b.created).getTime() - new Date(a.created).getTime();
                })
            ),
            map(filteredEntrys => {
                if (this.limit) {
                    return filteredEntrys.slice(0, this.limit);
                }

                return filteredEntrys;
            })
        );
    }

}
