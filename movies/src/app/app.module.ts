import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowDetailsMovieComponent } from './components/show-details-movie/show-details-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppComponent, HomeComponent, ShowDetailsMovieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
