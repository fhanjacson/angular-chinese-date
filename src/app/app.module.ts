import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatDatepickerModule],
  declarations: [AppComponent, HomePageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
