import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../Vehicles';
import { Location } from '@angular/common';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
@Input() vehicle?: Vehicle | any
  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private crudService: CrudService, private locatioin: Location) { }

  getVhl(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.crudService.getOneCar(id)
    .subscribe(vehicle => this.vehicle = vehicle);
  }
  
  ngOnInit(): void {
    this.getVhl();
  }
  goBack(): void{
    this.locatioin.back();
  }
}
