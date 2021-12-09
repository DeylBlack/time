import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-button',
  templateUrl: './time-button.component.html',
  styleUrls: ['./time-button.component.css'],
})
export class TimeButtonComponent {

  @Input() textButton = '';
  @Input() widthButton = '';
  @Input() textColor = '';
  @Input() backgroundColor = '';
  @Input() heightButton = '';

}
