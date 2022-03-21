// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Vehicle } from './Vehicles';

// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService implements InMemoryDbService{
//   // createDb(){
//   //   const vehicles = [
//   //       {
//   //         id: 1,
//   //         marque: 'Mercedes',
//   //         model: 'e300',
//   //         categorie: 'berline',
//   //         image: '/assets/images/mercedes.jpg'
//   //     },
//   //     {
//   //       id: 2,
//   //       marque: 'bmw',
//   //       model: 'm5',
//   //       categorie: 'coupé',
//   //       image: '/assets/images/bmw.jpg'
//   //     }
//   //   ];
//   //   return {vehicles}
//   // }
//   genId(vehicles: Vehicle[]): number {
//     return vehicles.length > 0 ? Math.max(...vehicles.map(vhl => vhl.id))+1 : 1
//   }
//   // constructor() { }
// }
