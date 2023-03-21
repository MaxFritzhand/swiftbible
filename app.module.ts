import { NgModule } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyNodeMapComponent } from './my-node-map/my-node-map.module';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNodeMapComponent,
    MyDialogComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGraphModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    NgxGraphModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
