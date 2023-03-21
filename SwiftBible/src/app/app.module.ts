import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { NgxGraphModule } from '@swimlane/ngx-graph'; 
import { GraphComponent } from './graph/graph.component'; 
import { AppRoutingModule } from './app-routing.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NodeDetailsComponent } from './node-details/node-details.component';
import { MatButtonModule } from '@angular/material/button';
import { AppSlideOutPanelComponent } from './app-slide-out-panel/app-slide-out-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NodeDetailsComponent,
    AppSlideOutPanelComponent,
    // ...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGraphModule,
    // ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
