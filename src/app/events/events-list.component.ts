import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { ToastrService } from '../toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
    selector: 'app-event-list',
    templateUrl: './events-list.component.html'
})
export class  EventListComponent implements OnInit {
  eventData: IEvent;
    handleEventClicked(data) {
        console.log(data);
    }

    constructor(private eventService: EventserviceService, private toastrService: ToastrService, private route: ActivatedRoute) {}

 ngOnInit() {
    // this.eventService.getEvents().subscribe(event=> {this.eventData = event});
    this.eventData = this.route.snapshot.data['events'];
 }

 handleThumbnailClick(eventName) {
  this.toastrService.success(eventName);
 }

}
