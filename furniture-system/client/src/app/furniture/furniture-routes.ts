import { Routes } from "@angular/router";
 
import { CreateFurnitureComponent } from "./create-furniture/create-furniture.component";
import { FurnitureAllComponent } from "./furniture-all/furniture-all.component";
import { FurnitureDetailsComponent } from "./furniture-details/furniture-details.component";
import { FurnitureUserComponent } from "./furniture-user/furniture-user.component";
import { EditFurnitureComponent } from "./edit-furniture/edit-furniture.component";
import { AdminGuard } from "../authentication/guards/admin.guard";

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'create', component: CreateFurnitureComponent},
    { path: 'all', component: FurnitureAllComponent },
    { path: 'details/:id', component: FurnitureDetailsComponent },
    { path: 'user', component: FurnitureUserComponent },
    { path: 'edit/:id', component: EditFurnitureComponent, canActivate: [AdminGuard] }
  ]