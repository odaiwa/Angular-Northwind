import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers/sellers.component';
import { WholesalersComponent } from './wholesalers/wholesalers.component';
import { RetailersComponent } from './retailers/retailers.component';


//ng g m components/suppliers-area/suppliers --flat

const router: Routes = [
   //This route is: "/suppliers"
  { path: "", component: SellersComponent ,children:[
    {path:"wholesalers",component:WholesalersComponent}, // "/suppliers/wholesalers"
    {path:"retailers",component:RetailersComponent},// "/suppliers/retailers"

  ]}
];

@NgModule({
  declarations: [
    SellersComponent,
    WholesalersComponent,
    RetailersComponent
  ],
  imports: [
    RouterModule.forChild(router),
    CommonModule
  ]
})
export class SuppliersModule { }
