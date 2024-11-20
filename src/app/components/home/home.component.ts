import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ListcategoriesComponent } from '../listcategories/listcategories.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.child.affichage()
  }

  
  @ViewChild(ListcategoriesComponent) child!: ListcategoriesComponent;
  //@ViewChild("test") t!: HTMLInputElement;

}
