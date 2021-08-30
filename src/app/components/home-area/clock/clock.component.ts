import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit,OnDestroy {

  public time:string;
  public timer:number;

  constructor() { }

  //ComponentWillMount
  ngOnInit(): void {
    this.timer = window.setInterval(()=>{
      const now = new Date();
      this.time = now.toLocaleTimeString();
    },1000);
  }

  //ComponentWillUnMount
  ngOnDestroy(): void {
   window.clearInterval(this.timer);
  }

}
