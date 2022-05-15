import { Component, Input, OnInit } from '@angular/core';
import ISection from 'src/app/interfaces/Isection';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() section: (ISection | null) = null;
  class:string = `${this.section?.size} menu-item`;

  constructor() { }

  ngOnInit(): void {
  }

}
