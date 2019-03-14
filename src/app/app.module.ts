import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogModule} from './blog/blog.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BlogModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}