import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText;
  imageSources = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Qs9KpmBpu5OFW4qXpg_LGeiqJOrrTCsfI5eg2mgPeccJnLhr',
    '../../assets/bach.jpg',
    '../../assets/office.jpg',
    '../../assets/r&m.jpg',
    '../../assets/supernatural.jpg',
  ];
  constructor(private router: Router) { }


  ngOnInit() {
  }
// Add this function
// Import Router

  goToList() {
    this.router.navigate(['/result', { search: this.searchText}]);
  }

}


