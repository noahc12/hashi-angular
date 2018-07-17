import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
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


