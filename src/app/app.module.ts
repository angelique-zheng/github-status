import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularComponent } from './angular/angular.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent, AngularComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
