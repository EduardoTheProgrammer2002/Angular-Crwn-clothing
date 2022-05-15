import { Injectable } from '@angular/core';
import ISection from '../interfaces/Isection';


@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  sections: ISection[] = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      route: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      route: ''
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      route: 'sneakers'
    },
    {
      title: 'women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 4,
      size: 'large',
      route: ''
    },
    {
      title: 'men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 5,
      size: 'large',
      route: ''
    }
  ] 

  constructor() { }
}
