import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { EventserviceService } from './eventservice.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService:EventserviceService) { }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
