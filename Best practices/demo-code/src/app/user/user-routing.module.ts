import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EntityComponent } from './entity/entity.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'create',
        component: EntityComponent
    },
    {
        path: 'edit/:id',
        component: EntityComponent
    }
]

export const UserRoutingModule = RouterModule.forChild(routes);