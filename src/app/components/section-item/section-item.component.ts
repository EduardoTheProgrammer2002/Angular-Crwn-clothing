import { Component, Input, OnInit } from '@angular/core';
import IItems from 'src/app/interfaces/Iitems';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

  starIcon = faStar;
  startHalf = faStarHalf;
  
  constructor() { }

  ngOnInit(): void {
  }

}
