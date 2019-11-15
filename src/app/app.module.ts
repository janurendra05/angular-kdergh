import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VotingComponent } from '.voting/voting.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
    ReactiveFormsModule ],
  declarations: [ 
    AppComponent,
    VotingComponent,
    HomeComponent],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
