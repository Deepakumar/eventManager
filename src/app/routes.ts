import { Routes} from '@angular/router';
import { EventListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { EventRouteDeactivatorService } from './event-route-deactivator.service';
import { EventListResolverService } from './event-list-resolver.service';

export const appRouters: Routes = [
    {path: 'events', component: EventListComponent, resolve: { events: EventListResolverService }},
    // {path: 'events', component: EventListComponent},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent',EventRouteDeactivatorService]},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
    
]