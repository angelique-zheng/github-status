import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { GithubSystemStatusComponent } from './github-system-status/github-system-status.component';

const routes: Routes = [
    { path: '', component: AngularComponent },
    { path: 'github-system-status', component: GithubSystemStatusComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
