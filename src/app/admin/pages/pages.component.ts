import { PagesService } from './../../services/pages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit() {
  }

}
