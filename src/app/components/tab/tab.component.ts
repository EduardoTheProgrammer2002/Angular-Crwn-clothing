import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  active: boolean = false;
  @Input() tabTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
