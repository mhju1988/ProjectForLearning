import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[] =  [
    new Recipe('A Test Recipe1', 'This is simply a test1 ', 'https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2 ', 'https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg'),

    new Recipe('A Test Recipe3', 'This is simply a test3 ', 'https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg')
  ];

  constructor() {
  }
  ngOnInit(){
  }

}
