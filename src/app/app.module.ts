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
import { UserInputFormComponent } from './body/user-input-form/user-input-form.component';
import { DietTableComponent } from './body/diet-table/diet-table.component';
import { CreateDietComponent } from './body/create-diet/create-diet.component';
import { GrayedDirective } from './body/create-diet/grayed.directive';
import { AdminPanelComponent } from './body/admin-panel/admin-panel.component';
import { TransformKcalPipe } from './body/diet-table/transform-kcal.pipe';


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
    AdminPanelComponent,
    TransformKcalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
