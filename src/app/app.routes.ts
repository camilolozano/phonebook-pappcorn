import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { DiaryComponent } from './diary/diary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

export const routes: Routes = [
    {
        path: '',
        component: DiaryComponent // remove example
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'edit-contacts/:id',
        component: EditContactsComponent
    },
    {
        path: 'create-contacts',
        component: CreateContactComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent // remove example
    }
];

export const appRoutingProviders: any[] = [];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
