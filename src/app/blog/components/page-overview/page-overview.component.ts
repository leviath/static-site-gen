import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BlogEntrys} from '../../interfaces/blog-entrys';
import {BlogContentService} from '../../services/blog-content/blog-content.service';

@Component({
    selector: 'app-page-overview',
    templateUrl: './page-overview.component.html',
    styleUrls: ['./page-overview.component.scss']
})
export class PageOverviewComponent implements OnInit {

    public blogContent$: Observable<BlogEntrys>;

    constructor(private blogContentService: BlogContentService) {
    }

    public ngOnInit() {
        this.blogContent$ = this.blogContentService.blogContent$;
    }

}
