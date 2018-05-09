import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { DiaryComponent } from './diary/diary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: DiaryComponent // remove example
    },
    {
        path: '**',
        component: PageNotFoundComponent // remove example
    }
];

export const appRoutingProviders: any[] = [];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
