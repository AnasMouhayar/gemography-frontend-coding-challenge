import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos-item',
  templateUrl: './repos-item.component.html',
  styleUrls: ['./repos-item.component.scss'],
})
export class ReposItemComponent {

  @Input() repository: any;

  constructor() {}

  ngOnInit() {
    
  }
  
  calculateDateAndTimeDifference(data){

    let start = new Date().getTime();

    let end = new Date(data).getTime();

    let time = start - end;

    let diffDay = Math.floor( time / 86400000 )

    let diffHour = Math.floor( (time % 86400000) / 3600000 )

    let diffMinute = Math.floor( ((time % 86400000) % 3600000) / 60000 )

    if(diffDay > 0){
      return diffDay+" days";
    }
    if(diffHour > 0){
      return diffHour+" hours";
    }
    if(diffMinute > 0){
      return diffMinute+" minutes";
    }

  }
}
