import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-challenge',
  templateUrl: './coding-challenge.component.html',
  styleUrls: ['./coding-challenge.component.scss']
})
export class CodingChallengeComponent implements OnInit {

  constructor() {  }

  ngOnInit() {

    console.log("%cCodingChallenge module is running","color: green; font-family:sans-serif; font-size: 40px")
    
  }


}
