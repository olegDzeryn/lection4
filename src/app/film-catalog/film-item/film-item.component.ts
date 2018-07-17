import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';
@Component({
  selector: 'film-item-inner',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})

export class FilmItemComponent implements OnInit {
  @Input('filmInfo') film1: any;
  @Output() update = new EventEmitter<number>();
  @Output() unUpdate = new EventEmitter<number>();
  value: boolean = true;
  init: boolean;
  chois: string = "Добавить в избанное";
  numberChildren: number = 0;
  elementId: number;

  param = {
    param1: true,
    param2: false
  };
  constructor() { }
  setToParent(el: string) {
    if (!this.film1.favorite) {
      this.update.emit();
      this.film1.favorite = true;
      this.chois = "Удалить с избранного";
    } else {
      this.unUpdate.emit();
      this.film1.favorite = false;
      this.chois = "Добавить в избранное";
    }
  }
  choisFavorite() {
    if (this.film1.favorite) {
      return "Удалить с избранного";
    } else {
      return "Добавить в избранное";
    }
  }

  filmDescription() {
    this.param.param1 = !this.param.param1;
    this.param.param2 = !this.param.param2;
    console.log(this.param);
    return this.param;
  }
  lengthDescription() {
    if (this.param.param1) {
      return "Показать весь текст";
    } else {
      return "Показать отрывок текста"
    }
  }



  ngOnInit() {
  }

}
