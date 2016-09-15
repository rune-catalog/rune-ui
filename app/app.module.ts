import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, IndexComponent ],
  bootstrap: [ AppComponent, HeaderComponent, IndexComponent ]
})
export class AppModule { }
