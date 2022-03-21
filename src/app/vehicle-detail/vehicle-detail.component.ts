import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../Vehicles';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
@Input() vehicle?: Vehicle
  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private locatioin: Location) { }

  getVhl(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getVhl(id)
    .subscribe(vhl => this.vehicle = vhl);
  }
  
  ngOnInit(): void {
    this.getVhl();
  }
  goBack(): void{
    this.locatioin.back();
  }
}
