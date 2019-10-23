import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventserviceService } from './eventservice.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRouters} from './routes';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers : [
    EventserviceService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
