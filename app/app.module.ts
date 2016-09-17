import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import components
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { IndexComponent } from './components/index.component';
import { CardListComponent } from './components/card-list.component';
import { CardListItemComponent } from './components/card-list-item.component';
import { CardCollapsedComponent } from './components/card-collapsed.component';
import { CardExpandedComponent } from './components/card-expanded.component';

// Import services
import { CardsService } from './services/cards.service';
import { SelectedCardService } from './services/selected-card.service';

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
