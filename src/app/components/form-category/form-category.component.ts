import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ListcategoriesComponent } from '../listcategories/listcategories.component';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent {

  category: Category = new Category();

  add() {
    this.category.available = true;
    console.log(this.category);
  }
}
