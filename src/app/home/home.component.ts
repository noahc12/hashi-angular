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
    'https://cdn-images-1.medium.com/max/1200/1*Ji9ylBp76WWBqBYOD8A4bw.jpeg',
    'https://a248.e.akamai.net/ib.huluim.com/show_key_art/70?size=1600x600&region=US',
    'https://i.pinimg.com/originals/fc/c8/de/fcc8de3d62f654eb98de306139b43bda.jpg',
    'https://i.ytimg.com/vi/GFQjf4k9l5w/maxresdefault.jpg',
    'http://freshwallpapers.net/download/9392/1920x1080/download/the-flash-tv-series-logo.jpg'
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


