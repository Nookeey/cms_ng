import { PagesService } from './../../../services/pages.service';
import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/page';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {

  pages: Array<Page> = [];

  constructor(private pagesService: PagesService) {
    console.log('Pages list constructor');
    this.pagesService.getPagesObs().subscribe((pages: Array<Page>) => {
      this.pages = pages;
      console.log(pages);
    });
  }

  ngOnInit() {
    console.log('Pages list ngOnInit');
  }

  delete(page: Page) {
    this.pagesService.deletePage(page);
  }

}
