import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodayComponent } from './component/today/today.component';
import { HttpClientModule } from '@angular/common/http';
import { FutureComponent } from './component/future/future.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    FutureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
