import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
// import { Vehicle } from '../Vehicles';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent implements OnInit {
  vehicles: any = [];
  constructor(private vehiclesService: VehicleService, private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getCars().subscribe(
      res => {
        console.log(res)
        this.vehicles = res;
    }
    )
  }
}
