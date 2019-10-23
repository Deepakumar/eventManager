import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any;
  constructor(private eventService: EventserviceService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }

}
