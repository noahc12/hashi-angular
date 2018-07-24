import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  descriptionpic = '../../assets/mha.jpg';
  constructor() { }
startpreview() {
  this.descriptionpic = '../../assets/bnha.gif';
}
changegif() {
  this.descriptionpic = '../../assets/mha.jpg';
}
  ngOnInit() {
  }

}
