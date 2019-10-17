import { Component } from "@angular/core";

@Component({
    selector:'event-list',
    template: `
                <div>
                    <h1>Upcoming Events</h1>
                    <hr/>
                    <div class="well hoverwell thumbnail">
                        <h2>{{event.name}}</h2>
                        <div>Date: {{event.date}}</div>
                        <div>Time:{{event.time}}</div>
                        <div>Price: \$ {{event.price}}</div>
                        <div>
                            <span>Location: {{event.location.address}}</span>
                            <span>&nbsp;</span>
                            <span>{{event.location.city}}, {{event.location.country}}</span>
                        </div>
                    </div>
                </div>
              `
})
export class  EventListComponent {
    event = {
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
}