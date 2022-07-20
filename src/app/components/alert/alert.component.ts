import { Component, Input, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
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
        opacity: 1,
        display: 'visible'
      })),

      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition("show => hide", animate('650ms ease-in')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class AlertComponent implements OnInit {
  @Input() success: boolean = true;
  show: boolean = false;
  time: number = 0;
  

  //icons
  successIcon = this.success ? faCircleCheck : faXmarkCircle;
  closeIcon = faXmark;

  constructor() { }

  ngOnInit(): void {
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

  toggleState() {
    this.show = !this.show;
  }
}
