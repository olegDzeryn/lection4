import { Component, OnInit } from '@angular/core';
//import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  //styles: [`h2 {color: red;}`, ``]
})
export class MainComponent implements OnInit {
  pageName: string = "Film Catalog Dashboard";

  list: string[] = ['asd', 'asd'];

  constructor() { }

  ngOnInit() { }

}
//import {Component} from '@angular/core';

/**
 * @title Complex Example
 */
/*@Component({
  selector: 'tabs-template-label-example',
  templateUrl: 'tabs-template-label-example.html',
  styleUrls: ['./tabs-template-label-example.css']
})
export class TabsTemplateLabelExample {}*/
