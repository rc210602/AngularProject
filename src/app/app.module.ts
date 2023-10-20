import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChowdrahHeadComponent } from './chowdrah-head/chowdrah-head.component';
import { ChowdrahFootComponent } from './chowdrah-foot/chowdrah-foot.component';
import { ChowdrahMainComponent } from './chowdrah-main/chowdrah-main.component';


@NgModule({
  declarations: [
    AppComponent,
    ChowdrahHeadComponent,
    ChowdrahFootComponent,
    ChowdrahMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
