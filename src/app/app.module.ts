import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';
import { DietTableComponent } from './diet-table/diet-table.component';
import { CreateDietComponent } from './create-diet/create-diet.component';
import { GrayedDirective } from './user-input-form/grayed.directive';
import { MealsDataBaseComponent } from './meals-data-base/meals-data-base.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpService } from './admin-panel/http.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    UserInputFormComponent,
    DietTableComponent,
    CreateDietComponent,
    GrayedDirective,
    MealsDataBaseComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
