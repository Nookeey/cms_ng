import { PagesService } from './../../../services/pages.service';
import { Page } from './../../../models/page';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pages-create',
  templateUrl: './pages-create.component.html',
  styleUrls: ['./pages-create.component.css']
})
export class PagesCreateComponent implements OnInit {

  pageForm: FormGroup;

  page = new Page();

  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    this.pageForm = new FormGroup({
      name: new FormControl(null),
      slug: new FormControl(null)
    });
  }

  onSubmit() {
    this.page.name = this.pageForm.value.name;
    this.page.slug = this.pageForm.value.slug;
    console.log(this.page);
    this.pagesService.createNewPage(this.page);
    this.onReset();
  }

  onReset() {
    this.pageForm.reset();
  }

}
