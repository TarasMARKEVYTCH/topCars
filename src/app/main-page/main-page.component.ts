import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  vehicles: any
  categories: any

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getTop().subscribe(
      res => {
        // console.log(res);
        this.vehicles = res;
      }
    )
    this.crudService.getCategories().subscribe(
      res => {
        // console.log(res);
        this.categories = res;
      }
    )
  }

}
