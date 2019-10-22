import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `<app-nav></app-nav><app-event-list></app-event-list>
            `,
  styles : [`
              .nav .navbar-nav {font-size: 15px;}
              #searchForm { margin-right: 100px}
              @media (max-width:1200px) {#searchForm {display:none}}
           `]
})
export class EventsAppComponent {
  title = 'eventManager';
}
