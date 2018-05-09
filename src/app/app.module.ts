import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import routes
import { AppRoutes, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [DiaryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
