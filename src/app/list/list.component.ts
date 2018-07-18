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
      key: 'Rick and Morty',
      value: [
        {
          name : 'The Devils a Part Timer',
          picture: 'https://img1.ak.crunchyroll.com/i/spire1/84618be75ad3f94f530b2b1e7c821ed61492723563_full.jpg',
          description: 'With no real-world skills, the devil is forced to make ends meet flipping burgers at a fast food joint!',
          pic_height: 50,
          pic_width : 50
        },
        {
          name: 'Shimoneta',
          picture: '../../assets/shimoneta.jpg',
          description: 'In a world where dirty jokes dont exist, a hero must rise up as a symbol for all things lewd and rude.'
        },
        {
          name: 'Miss Kobayashis Dragon Maid',
          picture: '../../assets/mkd.jpg',
          description: 'Miss Kobayashi is your average office worker who lives a boring life, until she saves the life of a female dragon',
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
