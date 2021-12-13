import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users.component";
import {AddEditUserComponent} from "./add-edit-user/add-edit-user.component";
import {UserResolver} from "./services/user.resolver";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {userData: UserResolver}
  },
  {
    path: 'add-user',
    component: AddEditUserComponent
  },
  {
    path: 'update-user/:id',
    component: AddEditUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
