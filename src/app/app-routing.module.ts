import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { FamilyComponent } from './family/family.component';
import { GenusComponent } from './genus/genus.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  { path: '', component: FruitsComponent },
  { path: 'family/:family', component: FamilyComponent},
  { path: 'genus/:genus', component: GenusComponent },
  { path: 'order/:order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
