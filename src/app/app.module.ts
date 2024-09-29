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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
