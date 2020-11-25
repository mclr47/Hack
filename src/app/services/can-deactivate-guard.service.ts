import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterState, RouterStateSnapshot} from '@angular/router';
export interface ChangeComponent
{
  canDeactivate:() => Observable<boolean> | Promise<boolean> |boolean;

  }

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate <ChangeComponent> {

  constructor() { }
  canDeactivate(component : ChangeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot,
    nextState? : RouterStateSnapshot) :  Observable<boolean> | Promise<boolean> |boolean
    {
      return confirm('Do  you want to move away from  page?');
    }
}
