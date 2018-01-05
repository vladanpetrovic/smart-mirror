import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  events = [
    'John Doe birthday',
    'Meeting at 12:00'];

  constructor() { }

  ngOnInit() {
  }

}
