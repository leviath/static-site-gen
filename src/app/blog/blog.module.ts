import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {PageOverviewComponent} from './components/page-overview/page-overview.component';
import {PageDetailComponent} from './components/page-detail/page-detail.component';
import {TeaseredContentComponent} from './components/teasered-content/teasered-content.component';
import {PipesModule} from './pipes/pipes.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        PageOverviewComponent,
        PageDetailComponent,
        TeaseredContentComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BlogRoutingModule,
        PipesModule
    ]
})
export class BlogModule {
}
