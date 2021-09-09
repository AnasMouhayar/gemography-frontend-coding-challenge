import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss'],
})
export class ReposListComponent {
  
  @Input() reposList: any[];

  constructor() {}

  ngOnInit() {
    
  }
  
}