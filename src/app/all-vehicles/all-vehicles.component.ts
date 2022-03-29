import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Vehicles';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent implements OnInit {
  vehicles: any = [];
  constructor(private crudService: CrudService) { }

  async ngOnInit(): Promise<void> {
    (await this.crudService.getCars()).subscribe(
      res => {
        console.log(res)
        this.vehicles = res;
    }
    )
  }
}
