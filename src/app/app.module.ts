import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NpsComponent } from './nps/nps.component';
import { NpsService } from './services/nps.service';


@NgModule({
  declarations: [
    AppComponent,
    NpsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
