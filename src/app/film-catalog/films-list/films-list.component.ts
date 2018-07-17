import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';
import { getLocaleDateFormat, UpperCasePipe } from '@angular/common';
import { tick } from '@angular/core/src/render3';
import { throws } from 'assert';
import { Film } from '../../film';



@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];
  numberFilm: number = 0;
  paging: number = 6;
  sortTypeLast: boolean = false;
  douloud: string = "Загрузить еще";
  inputFilm: string;
  //newList: Film[];

  constructor(public filmsService: FilmService) {
  }
  ngOnInit() {
    let result: any;
    console.log(11111);
    this.filmsService.getPopularFilms().subscribe(
      (filmList: any) => {
        console.log(filmList);
        console.log(filmList.results);

        this.filmsService.films = filmList.results.map((result) => {
          this.filmsService.films.push({

            id: result.id,
            isFavorite: false,
            vote_average: result.vote_average,
            title: result.title,
            popularity: result.popularity,
            release_date: result.release_date,
            overview: result.overview.slice(0, 130),
            poster_path: `${this.filmsService.midImgPath}${result.poster_path}`

          })
        })

        // this.filmsService.films = [...];
      }
    )
    this.sortFilms(true);
    this.numberFavoriteFilms();
  }
  numberFavoriteFilms() {
    this.numberFilm = this.films.filter(item => item.isFavorite === true).length;
  }
  setUpdatedValue(eventParam) {
    this.numberFilm++;
  }
  setUnUpdatedValue(eventParam) {
    this.numberFilm--;
  }
  sortFilms(sortType: boolean) {

    if (!(sortType === this.sortTypeLast)) {
      this.paging = 6;
    }
    this.films = this.filmsService.films.sort((a, b) => a.title.localeCompare(b.title));
    if (!sortType) {
      this.films = this.filmsService.films.sort((a, b) => a.title.localeCompare(b.title));
      this.films.reverse();
    }
    this.films = this.films.slice(0, this.paging);

    this.sortTypeLast = sortType;
  }
  setPaging() {
    this.paging = this.paging + 6;
    if (this.paging <= this.filmsService.films.length) {
      this.sortFilms(this.sortTypeLast);

    } else {
      this.douloud = "Елементов больше нет";
    }
  }
  sortOneFilm(inp?: string) {
    this.films = (inp) ? this.filmsService.films.filter(film => film.title.toLowerCase().
      includes(inp.toLowerCase()) && film.title.toLowerCase().substring(0, 1) === inp.toLowerCase().
        substring(0, 1)) : this.filmsService.films;
  }
}


