import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUIElementsModule, NotAuthenticatedGuard } from 'common-ui-elements';
import { HomeComponent } from './home/home.component';


import { ShowDialogOnErrorErrorHandler } from './common/dialog';
import { terms } from './terms';
import { AdminGuard } from "./users/AdminGuard";
import { UsersComponent } from './users/users.component';

const defaultRoute = terms.home;
const routes: Routes = [
  { path: defaultRoute, component: HomeComponent, canActivate: [NotAuthenticatedGuard] },
  { path: terms.userAccounts, component: UsersComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: '/' + defaultRoute, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonUIElementsModule],
  providers: [AdminGuard, { provide: ErrorHandler, useClass: ShowDialogOnErrorErrorHandler }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
