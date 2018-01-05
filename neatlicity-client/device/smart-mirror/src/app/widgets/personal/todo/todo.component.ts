import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos = [
    '#1 Develop SmartMirror',
    '#2 Develop Mobile Clients',
    '#3 Develop Web Services'];

  constructor() { }

  ngOnInit() {
  }

}
