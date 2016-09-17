import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { IndexComponent } from './index.component';
import { CardListComponent } from './card-list.component';
import { CardListItemComponent } from './card-list-item.component';
import { CardCollapsedComponent } from './card-collapsed.component';
import { CardExpandedComponent } from './card-expanded.component';

// Import services
import { CardsService } from './cards.service';
import { SelectedCardService } from './selected-card.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CardListComponent,
    CardListItemComponent,
    CardCollapsedComponent,
    CardExpandedComponent
  ],
  providers: [
    CardsService,
    SelectedCardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
