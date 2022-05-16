import { Component, Input, OnInit } from '@angular/core';
import ISection from 'src/app/interfaces/Isection';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() sections: (ISection[] | null) = null;

  constructor() { }

  ngOnInit(): void {
  }

}
