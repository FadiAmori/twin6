import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';  // Import the Product model

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  // Declare the title property for search
  title: string = ''; // This will bind to the search input field

  // List of products (replace the existing mock data with the full Product model)
  listProducts: Product[] = [
    { id: 1, name: 'Cuisinière', image: 'assets/images/grand_electromenagers/cuisiniere.png', description: '699 dt', price: 699, brand: 'BrandA', promotion: 0, nb_likes: 100, categoryId: 1 },
    { id: 2, name: 'Réfrigérateur', image: 'assets/images/grand_electromenagers/refrigerateur.jpg', description: '1500 dt', price: 1500, brand: 'BrandB', promotion: 0, nb_likes: 200, categoryId: 1 },
    { id: 3, name: 'Robot Pétrin', image: 'assets/images/petit_electromenager/robot_petrin.jpg', description: '430 dt', price: 430, brand: 'BrandC', promotion: 0, nb_likes: 150, categoryId: 2 },
    { id: 4, name: 'Fer à repasser', image: 'assets/images/petit_electromenager/fer_a_repasser.jpg', description: '130 dt', price: 130, brand: 'BrandD', promotion: 0, nb_likes: 90, categoryId: 2 },
    { id: 5, name: 'Oppo', image: 'assets/images/smart_phones/Oppo.jpg', description: '920 dt', price: 920, brand: 'Oppo', promotion: 0, nb_likes: 500, categoryId: 4 },
    { id: 6, name: 'TV Téléfunkun', image: 'assets/images/tv_images_son/tv1.jpg', description: '845 dt', price: 845, brand: 'Téléfunkun', promotion: 0, nb_likes: 120, categoryId: 5 }
  ];

  shortList: Product[] = [];
  addToShortList(product: Product) {
    console.log('Before adding:', this.shortList);
    this.shortList.push(product);
    console.log('After adding:', this.shortList);
  }
  
  
}
