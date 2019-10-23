import { Routes} from '@angular/router';
import { EventListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';

export const appRouters: Routes = [
    {path: 'events', component: EventListComponent },
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    
]