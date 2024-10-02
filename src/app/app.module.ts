import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HomeComponent } from './componenets/home/home.component';

import { HighlightDirective } from './highlight.directive';
import { ListecategoriesComponent, ContainsPipe } from './componenets/listecategories/listecategories.component'; // Update path as necessary
import { ProductModule } from './features/product/product.module';
import { ProductComponent } from './features/product/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListecategoriesComponent,
    HighlightDirective,
    ContainsPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
