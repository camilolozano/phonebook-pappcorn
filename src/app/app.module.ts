import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Import routes
import { AppRoutes, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    PageNotFoundComponent,
    ContactsComponent,
    EditContactsComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DiaryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
