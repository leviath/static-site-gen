import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagFilterPipe} from './filter-tags/flag-filter.pipe';
import {AssetPathPipe} from './asset-path/asset-path.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AssetPathPipe,
        FlagFilterPipe
    ],
    exports: [
        AssetPathPipe,
        FlagFilterPipe
    ]
})
export class PipesModule {
}
