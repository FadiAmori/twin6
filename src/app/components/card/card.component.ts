import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input() id!: number;
  @Input() title!: string;
  @Input() available!: boolean;
  @Input() image!: string;
  @Input() price!: number;
  @Input() nb_likes!: number;
  @Input() brand!: string;  // Add brand property here

  @Output() d = new EventEmitter<number>(); // Event to delete
  @Output() l = new EventEmitter<number>(); // Event for likes

  // Method to trigger delete event
  deleteChild() {
    this.d.emit(this.id); // Emit the id of the item to delete
  }

  // Method to trigger like event
  likeChild() {
    this.l.emit(this.id); // Emit the id of the item liked
  }


  @Output() addToShortList = new EventEmitter<any>(); // Event to add to shortlist

// Method to trigger add to shortlist event
addToShortListHandler() {
  console.log('Add to shortlist clicked!');
  const product = {
    id: this.id,
    title: this.title,
    image: this.image,
    price: this.price,
    nb_likes: this.nb_likes,
    brand: this.brand
  };
  this.addToShortList.emit(product);
}


}
