import { Injectable } from '@angular/core';
import IShopData from '../interfaces/IShop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }

  shopData: IShopData[] = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://images.unsplash.com/photo-1490393602454-04ef4860188a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1300',
          price: 25,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18,
          rating: this.getRandomArbitrary(2, 5)
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 4,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 5,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 6,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 7,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 8,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 9,
          name: 'Gray And Brown Cap',
          imageUrl: 'https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200',
          price: 20,
          rating: 5
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220,
          rating: this.getRandomArbitrary(2, 5)
        },
        {
          id: 2,
          name: 'Nike Air Force 1',
          imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 280,
          rating: this.getRandomArbitrary(2, 5)
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110,
          rating: 3
        },
        {
          id: 4,
          name: 'NIKE DUNK',
          imageUrl: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 160,
          rating: this.getRandomArbitrary(2, 5)
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://images.unsplash.com/photo-1612821745127-53855be9cbd1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 160,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 9,
          name: 'Red Vanz Limited',
          imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 300,
          rating: 3
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1616258734679-57e515f9cdc1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 90,
          rating: 5
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185,
          rating: 4
        },
        {
          id: 6,
          name: 'Nike Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1559938518-d2039515112a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735',
          price: 105,
          rating: 5
        },
        {
          id: 7,
          name: 'Leather Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 300,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 8,
          name: 'Skin Color Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1580742471944-c1c187a943e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 280,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 9,
          name: 'Blue Color Jacket',
          imageUrl: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 180,
          rating: 3
        }
      ]
    },
    {
      id: 4,
      title: 'Women',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 2,
          name: 'Jean pants',
          imageUrl: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&h=587',
          price: 20,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 5,
          name: 'Red dress',
          imageUrl: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
          price: 45,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 6,
          name: 'Pink Pants Suit',
          imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=850',
          price: 135,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 8,
          name: 'Completed outfit',
          imageUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711',
          price: 400,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 9,
          name: 'Sport Tops',
          imageUrl: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=850',
          price: 30,
          rating: this.getRandomArbitrary(1, 5)
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Sweater In All Colors',
          imageUrl: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
          price: 325,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 2,
          name: 'Great-ON Outfit',
          imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1400',
          price: 20,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 3,
          name: 'T-shirts',
          imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1400',
          price: 25,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 4,
          name: 'Jean Pants',
          imageUrl: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&h=1400',
          price: 19,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 5,
          name: 'Dark Blue sweater',
          imageUrl: 'https://images.unsplash.com/photo-1611312449297-a69dc9c3987b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698',
          price: 40,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 6,
          name: 'Suit Coat',
          imageUrl: 'https://images.unsplash.com/photo-1497339100210-9e87df79c218?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&h=1400',
          price: 40,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 7,
          name: 'Clasic Outfit',
          imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=850',
          price: 120,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 8,
          name: 'All-in-one Outfit',
          imageUrl: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=800',
          price: 90,
          rating: this.getRandomArbitrary(1, 5)
        },
        {
          id: 9,
          name: 'Clasic Shirts',
          imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&h=1400',
          price: 30,
          rating: this.getRandomArbitrary(1, 5)
        }
      ]
    }
  ]

  constructor() { }
}
