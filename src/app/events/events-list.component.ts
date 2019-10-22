import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { ToastrService } from '../toastr.service';

@Component({
    selector: 'app-event-list',
    templateUrl: './events-list.component.html'
})
export class  EventListComponent implements OnInit {
  eventData: any;
    handleEventClicked(data) {
        console.log(data);
    }

    constructor(private eventService: EventserviceService, private toastrService: ToastrService) {}

 ngOnInit() {
  this.eventData = this.eventService.getEvents();
 }

 handleThumbnailClick(eventName) {
  this.toastrService.success(eventName);
 }

}
