import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: UntypedFormControl = new UntypedFormControl();
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() label: string = '' 


  constructor() { }

  ngOnInit(): void {
  }

}
