import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../Categories';
import { Vehicle } from '../Vehicles';
import { CrudService } from '../services/crud.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
vehicles: any = [];
  constructor(private route: ActivatedRoute, private crudService: CrudService, private location: Location) { }
async getCategorie(): Promise<void>{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  (await this.crudService.getOneCategorie(id))
  .subscribe(res => {
    console.log(res);
    this.vehicles = res
  });
}
goBack(){
  this.location.back();
}
  ngOnInit(): void {
    this.getCategorie()
    console.log(this.vehicles); 
  }

}
