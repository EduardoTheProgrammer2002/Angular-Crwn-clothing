import { Component, Input, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/services/alertService/alert.service';
import {
  trigger,
  state,
  style, 
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('popAlert', [
      state('show', style({
        opacity: 1
      })),

      state('hide', style({
        opacity: 0
      })),
      transition("show => hide", animate('650ms ease-in')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class AlertComponent implements OnInit {
  state: boolean = true;
  show: boolean = true;
  msg: string = "Success! know your log In";
  time: number = 0;
  

  //icons
  successIcon = this.state ? faCircleCheck : faXmarkCircle;
  closeIcon = faXmark;

  constructor(private alert: AlertService) {
  }

  ngOnInit(): void {
    //msg Observable
    this.alert.msg.subscribe((val) => {
      this.msg = val;
    })

    //state Observable
    this.alert.reqState.subscribe((val) => {
      this.state = val
    })

    //showprop observable
    this.alert.show.subscribe(val => {
      this.show = val;
      this.setTime();
    });  
  }

  setTime() {
    this.time = 0;
    const Int = setInterval(() => {
      this.time += 0.15;
    }, 1)

    setTimeout(() => {
      this.show = false;
      clearInterval(Int)
    }, 3000);

  }

  get alertState() {
    return this.show ? 'show' : 'hide';
  }

  closeAlert() {
    this.show = false;
  }
}
