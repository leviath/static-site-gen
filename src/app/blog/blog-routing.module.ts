import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOverviewComponent} from './components/page-overview/page-overview.component';
import {PageDetailComponent} from './components/page-detail/page-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: PageOverviewComponent,
    },
    {
        path: 'blog/:detail',
        component: PageDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {
}
