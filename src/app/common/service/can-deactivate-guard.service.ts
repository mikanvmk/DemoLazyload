import { Injectable }           from '@angular/core';
import { Observable }           from 'rxjs/Observable';
import { CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }  from '@angular/router';

export interface CanComponentDeactivate {
  confirmChangeRouter: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(state.url);
    console.log(route.url);

    return component.confirmChangeRouter()
  }
}
