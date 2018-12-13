import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { StarComponent } from './components/shared/star/star.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { RoutingModule } from './routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsFilterPipe,
    StarComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
