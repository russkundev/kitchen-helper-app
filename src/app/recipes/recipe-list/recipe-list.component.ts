import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Just a test recipe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRy5bNnoekjnXVU3TiXLd8xcXkCiZ3EcBSw&usqp=CAU"),
    new Recipe("Test Recipe", "Just a test recipe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRy5bNnoekjnXVU3TiXLd8xcXkCiZ3EcBSw&usqp=CAU")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
