import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BodyComponent } from './body/body.component';
import { DietTableComponent } from './body/diet-table/diet-table.component';
import { UserInputFormComponent } from './body/user-input-form/user-input-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/user-form', pathMatch: 'full'},
  {path: 'admin-panel', component: AdminPanelComponent},
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
