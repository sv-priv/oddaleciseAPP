import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-mountains',
  templateUrl: './main-mountains.component.html',
  styleUrls: ['./main-mountains.component.css']
})
export class MainMountainsComponent implements OnInit {

  @Input() mountain

  constructor() { }

  ngOnInit(): void {
  }

}
