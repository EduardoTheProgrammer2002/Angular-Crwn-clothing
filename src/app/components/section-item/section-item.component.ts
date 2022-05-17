import { Component, Input, OnInit } from '@angular/core';
import IItems from 'src/app/interfaces/Iitems';

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {
  @Input() item:IItems = {
    id: 1,
    name: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
