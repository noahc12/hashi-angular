import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  db = [
    {
      key: 'Pirate of the Carribean',
      value: [
        {
          name : 'One Piece',
          picture: 'picture link'
        },
        {
          name: 'Two Piece',
          picture: 'picture link'
        }
      ],
    },
    {
      key: 'The Flash',
      value: ['One Punch Man', 'My Hero Academia', 'Dragon Ball Super']
    },
    {
      key: 'Supernatural',
      value: ['Tokyo Ghoul']
    },
  ];
  searchText;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchText = params['search'];
      console.log(this.searchText);
    });
  }

}
