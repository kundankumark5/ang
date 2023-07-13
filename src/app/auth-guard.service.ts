import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
constructor (private authService:AuthService, private router :Router){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
return this.authService.isAuthenticated().then((t:boolean)=>{if(t){
  return true
}else{
  this.router.navigate['/']
}
})
}
canActivateChild (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{ //same as canActivate but applies only on cover but canActivatechild is for inner comps
  return this.canActivate(route,state);
}}