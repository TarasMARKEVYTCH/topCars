import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../Vehicles';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent implements OnInit {
  vehicles: Vehicles[] = [
    {
      id: '1',
      marque: 'Mercedes',
      model: 'e300',
      categorie: 'berline',
      image: '/assets/images/mercedes.jpg'
  },
  {
    id: '2',
    marque: 'bmw',
    model: 'm5',
    categorie: 'coupé',
    image: '/assets/images/bmw.jpg'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
