import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PagesService } from '../../../services/pages.service';
import { Page } from '../../../models/page';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pages-details',
  templateUrl: './pages-details.component.html',
  styleUrls: ['./pages-details.component.css']
})
export class PagesDetailsComponent implements OnInit {

  pageForm: FormGroup;
  contentForm: FormGroup;

  page = new Page();

  contentPrev = '';

  constructor(private pagesService: PagesService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param: Params) => {
      this.pagesService.getPage(param.get('id')).subscribe(e => {
        this.page = e;
        this.contentPrev = e.content;
      });
    });
  }

  ngOnInit() {
    this.pageForm = new FormGroup({
      name: new FormControl(),
      slug: new FormControl()
    });

    this.contentForm = new FormGroup({
      content: new FormControl()
    });
  }

  onSubmitPage() {
    this.page.name = this.pageForm.value.name;
    this.page.slug = this.pageForm.value.slug;
    console.log(this.page);
  }

  onSubmitContent() {
    this.page.content = this.contentForm.value.content;
    console.log(this.page);
  }

}
