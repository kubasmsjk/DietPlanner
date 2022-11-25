import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DietTableComponent } from './body/diet-table/diet-table.component';
import { UserInputFormComponent } from './body/user-input-form/user-input-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-form', pathMatch: 'full' },
  {path: '',component:BodyComponent, children: [
    { path: 'user-form' ,component: UserInputFormComponent},
    { path: 'diet-planner/:firstName', component: DietTableComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
