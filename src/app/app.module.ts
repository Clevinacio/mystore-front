import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layouts/layout.module';
import { ComponentsModule } from './components/components.module';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([]),
        NgbModule,
        LayoutModule,
        ComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
