import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storageService/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersGuard implements CanActivate {
  allowUser: boolean = false;

  constructor(
    private router: Router,
    private storage: StorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.storage.authState$.subscribe(state => {
      this.allowUser = state
      this.redirect(!this.allowUser);
    })
    return this.allowUser;
  }

  redirect(flag: boolean) {
    if (flag) {
      this.router.navigateByUrl('/');
    }
  }
  
}
