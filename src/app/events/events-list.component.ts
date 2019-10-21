import { Component } from "@angular/core";

@Component({
    selector: 'event-list',
    templateUrl: './events-list.component.html'
})
export class  EventListComponent {
    eventData = {
        id:1,
        name:'Angular connect',
        date: '9/26/2019',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/event4.jpg',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data) {
        console.log(data);
    }
}
