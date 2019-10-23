import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any;
  constructor(private eventService: EventserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['id']);
  }

}
