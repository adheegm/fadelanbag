import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const user = { role: 'admin' };
        if (user && user.role === 'admin') {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
