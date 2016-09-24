import { NgModule, OpaqueToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import components
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { IndexComponent } from './components/index.component';
import { CardListComponent } from './components/card-list.component';
import { CardListItemComponent } from './components/card-list-item.component';
import { CardCollapsedComponent } from './components/card-collapsed.component';
import { CardExpandedComponent } from './components/card-expanded.component';
import { LazyScrollDirective } from './components/lazy-scroll.component';

// Import stores
import { SelectedCardStore } from './stores/selected-card.store';
import { ScrollPositionStore } from './stores/scroll-position.store';
import { CardListStore } from './stores/card-list.store';

// import { Dispatcher } from 'flux-lite';
import { Dispatcher } from 'flux-lite';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CardListComponent,
    CardListItemComponent,
    CardCollapsedComponent,
    CardExpandedComponent,
    LazyScrollDirective
  ],
  providers: [
    Dispatcher,
    SelectedCardStore,
    ScrollPositionStore,
    CardListStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
