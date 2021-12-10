import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'time-button',
  templateUrl: './time-button.component.html',
  styleUrls: ['./time-button.component.css'],
})
export class TimeButtonComponent implements OnInit {

  @Input() text = '';

  ngOnInit(): void {

  }

}
