import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path:'all-Vehicles', component: AllVehiclesComponent},
  {path: 'sign-Up', component: SignUpComponent},
  {path: 'sign-In', component: SignInComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
