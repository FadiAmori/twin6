import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/category'; // Assuming the correct path
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-listecategories',
  templateUrl: './listecategories.component.html',
  styleUrls: ['./listecategories.component.css']
})
export class ListecategoriesComponent {
  // List of categories
  categories: Categorie[] = [
    {"id":1,"title":"Grand électroménager", "image":"assets/images/OIP.jpg", "description":"1515515", "available":true},
    {"id":2,"title":"Petit électroménager", "image":"assets/images/R.jpg", "description":"511515", "available":true},
    {"id":3,"title":"Produits informatiques", "image":"assets/images/R (1).jpg", "description":"626215", "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/R (1).jpg", "description":"", "available":true},
    {"id":5,"title":"TV, images et son", "image":"assets/images/R (1).jpg", "description":"joooooooo", "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/R (1).jpg", "description":"51050520nbjnqznljnsdvbujs", "available":false},
  ];

  // Variable to store the search input (initialize it as an empty string)
  titre: string = '';

  // Function to show category description
  showDec(description: string) {
    alert(description);
  }
}

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.title.toLowerCase().includes(searchText);
    });
  }
}
