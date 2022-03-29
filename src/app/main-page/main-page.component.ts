import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  vehicles: any
  categories: any

  constructor(private crudService: CrudService) { }

   async ngOnInit(): Promise<void> {
   (await this.crudService.getTop()).subscribe(
      res => {
        // console.log(res);
        this.vehicles = res;
      }
    );
    (await this.crudService.getCategories()).subscribe(
      res => {
        // console.log(res);
        this.categories = res;
      }
    )
  }

}
