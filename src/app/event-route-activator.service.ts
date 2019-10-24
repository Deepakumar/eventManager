import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { EventserviceService } from './eventservice.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventserviceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
     const eventExists = !!this.eventService.getEvent(+route.params['id']);

     if(!eventExists)
     this.router.navigate(['/404']);

     return eventExists;
  }
}
