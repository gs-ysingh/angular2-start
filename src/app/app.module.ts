import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {routing} from './router/app.routing';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from "./components/about.component";
import { ItemComponent } from './components/item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing],
  declarations: [ AppComponent, UserComponent, AboutComponent, ItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
