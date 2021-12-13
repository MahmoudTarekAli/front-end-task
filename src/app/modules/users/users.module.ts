import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {MatTableModule} from "@angular/material/table";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgxMatIntlTelInputModule} from "ngx-mat-intl-tel-input";
import {MatDividerModule} from "@angular/material/divider";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
    UsersComponent,
    AddEditUserComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    NgxMatIntlTelInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [FormBuilder]
})
export class UsersModule {
}
