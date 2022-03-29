import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../Vehicles';
import { Location } from '@angular/common';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
@Input() vehicle?: Vehicle | any
  constructor(private route: ActivatedRoute, private crudService: CrudService, private locatioin: Location) { }

  async getVhl(): Promise<void>{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    (await this.crudService.getOneCar(id))
    .subscribe((vehicle: any) => this.vehicle = vehicle);
  }
  
  ngOnInit() {
    this.getVhl();
  }
  goBack(): void{
    this.locatioin.back();
  }
}
