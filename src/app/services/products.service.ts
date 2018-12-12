import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'   // Nouveau depuis Angular 6
})
export class ProductsService {

  constructor() { }

  getAllProducts(): IProduct[] {
    return   [
      {
          'productId': 1,
          'productName': ' *** From Service ** Leaf Rake',
          'productCode': 'GDN-0011',
          'releaseDate': 'March 19, 2016',
          'description': 'Leaf rake with 48-inch wooden handle.',
          'price': 19.95,
          'starRating': 3,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
      },
      {
          'productId': 10,
          'productName': 'Video Game Controller',
          'productCode': 'GMG-0042',
          'releaseDate': 'October 15, 2015',
          'description': 'Standard two-button video game controller',
          'price': 35.95,
          'starRating': 4.6,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
      },
      {
          'productId': 2,
          'productName': 'Garden Cart',
          'productCode': 'GDN-0023',
          'releaseDate': 'March 18, 2016',
          'description': '15 gallon capacity rolling garden cart',
          'price': 32.99,
          'starRating': 4,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
          'productId': 5,
          'productName': 'Hammer',
          'productCode': 'TBX-0048',
          'releaseDate': 'May 21, 2016',
          'description': 'Curved claw steel hammer',
          'price': 8.9,
          'starRating': 4.8,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
      },
      {
          'productId': 8,
          'productName': 'Saw',
          'productCode': 'TBX-0022',
          'releaseDate': 'May 15, 2016',
          'description': '15-inch steel blade hand saw',
          'price': 11.55,
          'starRating': 1,
          'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
      }
  ];
  }
}
