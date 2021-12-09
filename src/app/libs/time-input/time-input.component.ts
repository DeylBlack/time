import {Component, Input} from '@angular/core';

@Component({
  selector: 'time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent {
  @Input() typeInput = '';

}
