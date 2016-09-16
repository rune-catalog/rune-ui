import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { IndexComponent } from './index.component';
import { CardListComponent } from './card-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CardListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
