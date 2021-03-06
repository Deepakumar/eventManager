import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';

@Injectable({
  providedIn: 'root'
})
export class EventRouteDeactivatorService implements CanDeactivate<CreateEventComponent> {

  constructor() { }

  canDeactivate(component: CreateEventComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot) {
    if(component.isdirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
  }
}
