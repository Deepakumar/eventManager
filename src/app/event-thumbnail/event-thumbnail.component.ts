import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
            <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div>Time:{{event?.time}}</div>
            <div>Price: \$ {{event?.price}}</div>
            <div>
                <span>Location: {{event?.location.address}}</span>
                <span>&nbsp;</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click Me</button>
            </div>
            `,
            styles:[
              `.pad-left: {margin-left: 10px}
              .well div { color:#bbc;}
              .thumbnail { min-height: 220px;}
              `
            ]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  thumbnailComponentId = 'THUM124589632';
  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
    this.eventClick.emit('eventClicked');
  }

  templateReferenceEventCalled() {
    console.log('Template varaible event');
  }

}
