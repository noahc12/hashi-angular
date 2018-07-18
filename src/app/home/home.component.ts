import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
export class AppComponent {
  items: Array<any> = [];
  constructor() {
    this.items = [
      { name: '../../assets/flash.jpg' },
      { name: '../../assets/office.jpg' },
      { name: '../../assets/supernatural.jpg' },
      { name: '../../assets/r&m.jpg' },
      { name: '../../assets/bach.jpg' },
    ];
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText;
  constructor(private router: Router) { }

  ngOnInit() {
  }
// Add this function
// Import Router

  goToList() {
    this.router.navigate(['/result', { search: this.searchText}]);
  }

}


