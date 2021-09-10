import { Component, Inject, Input, OnInit } from '@angular/core';
import { Repository } from '../../../shared/interfaces';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss'],
})
export class ReposListComponent {
  
  @Input() reposList: Repository[];

  constructor() {}

  ngOnInit() {
    
  }
  
}