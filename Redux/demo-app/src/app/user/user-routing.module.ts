import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListResolver } from './list/resolvers/list.resolver';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: ListComponent, resolve: [ListResolver] },
]

export const UserRoutingModule = RouterModule.forChild(routes);