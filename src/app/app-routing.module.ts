import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingExHomeComponent } from './routing-ex-home/routing-ex-home.component';
import { RoutingExUsersComponent } from './routing-ex-users/routing-ex-users.component';
import { RoutingExServersComponent } from './routing-ex-servers/routing-ex-servers.component';
import { RoutingExUserComponent } from './routing-ex-user/routing-ex-user.component';
import { RoutingExServerEditComponent } from './routing-ex-server-edit/routing-ex-server-edit.component';
import { RoutingExServerComponent } from './routing-ex-server/routing-ex-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: RoutingExHomeComponent,
    // loadChildren: () =>
    // import('./routing-ex/routing-ex.module').then((m) => m.RoutingExModule),  //for lazy loading
  },
  {
    path: 'routingExUsers',
    component: RoutingExUsersComponent,
    children: [{ path: ':id/:name', component: RoutingExUserComponent }],
  },
  // {
  //   path: 'routingExServers', canActivate:[AuthGuard],   // here authguard is our own service to check auth , we can also add canActivateChild for childern comp
  //   component: RoutingExServersComponent,
  //   children: [
  //     { path: ':id/edit', component: RoutingExServerEditComponent },
  //     { path: ':id', component: RoutingExServerComponent }
  // ],
  // },
  {
    path: 'routingExServers', canActivateChild:[AuthGuard],
    component: RoutingExServersComponent,
    children: [
      { path: ':id/edit', component: RoutingExServerEditComponent },
      { path: ':id', component: RoutingExServerComponent }
  ],
  },
  {path:'not-found',component:PageNotFoundComponent},
  // {path:'**',component:PageNotFoundComponent}, //or 👇
  {    path:'**',redirectTo:'/not-found'  }

  // { path: 'routingExUsers/:id/:name', component: RoutingExUserComponent }, // : is must then we can use it as id when we pass this path/anything this comp will load
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
