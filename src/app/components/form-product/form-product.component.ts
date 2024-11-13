import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{

  product !:FormGroup;
  
ngOnInit() {
this.product = new FormGroup({
  name: new FormControl("",[Validators.required]),
  image : new FormControl(),
  description : new FormControl(),
  price: new FormControl(),
  brand: new FormGroup({
    name: new FormControl(),
    logo: new FormControl()
  }),
  tags : new FormArray([new FormControl()]) ,
  promotion : new FormControl(),
})
}

get tags() {
  return (this.product.get('tags') as FormArray).controls as FormControl[]
}
get name() {
  return this.product.get('name')
}
addTag() {
  this.tags.push(new FormControl());
}

submit() {
  //console.log(this.name.value)
  console.log((this.product.get('tags') as FormArray).controls);

  console.log(this.product.value)
  console.log(this.product.get('name'));
  console.log(this.product.getRawValue())

  console.log(this.product.get('brand')!.get('name'))

}

}
