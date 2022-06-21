import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-to-up-button',
  templateUrl: './scroll-to-up-button.component.html',
  styleUrls: ['./scroll-to-up-button.component.scss']
})
export class ScrollToUpButtonComponent implements OnInit {
  arrowUp = faArrowUp;
  
  showButton:boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.showButton = window.scrollY > 450 ? true : false;
    })
  }

  scrollUp(event: Event): void {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

}
