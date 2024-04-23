import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbPaginationModule, NgbAlertModule,
    RouterOutlet
  ],
})
export class AppModule { }
