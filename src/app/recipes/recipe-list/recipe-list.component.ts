import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://www.dinneratthezoo.com/wp-content/uploads/2019/02/stuffed-zucchini-boats-5.jpg.webp'),
    new Recipe('Test Recipe', 'Test Description', 'https://www.dinneratthezoo.com/wp-content/uploads/2019/02/stuffed-zucchini-boats-5.jpg.webp')
  ];

  constructor() { }

  ngOnInit() {
  }

}
