import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoundationGuard implements CanActivate {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const project = next.queryParamMap.get('projects');

    const all = this.activatedRoute.snapshot.paramMap.keys;

    if (project) {
      return true;
    } else {
      const stateUrl = state.url;
      const parentUrl = stateUrl.split('/').slice(0, -1).join('/');
      return this.router.navigate([parentUrl]);
    }
  }
}
