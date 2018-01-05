import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public time: Date;
  private timeInterval: any;

  constructor() { }

  ngOnInit() {
    const updateClock = () => this.time = new Date();

    updateClock();
    this.timeInterval = setInterval(updateClock, 1000); //every 10 seconds
  }

  ngOnDestroy() {
    clearInterval(this.timeInterval);
  }

}
