import { Component, OnInit } from '@angular/core';
import { faUserTie, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-auth-user-modal',
  templateUrl: './auth-user-modal.component.html',
  styleUrls: ['./auth-user-modal.component.scss']
})
export class AuthUserModalComponent implements OnInit {
  
  //icon
  user: IconDefinition = faUserTie;
  

  constructor() { }

  ngOnInit(): void {
  }

}
