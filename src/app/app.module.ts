import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './material-components/material-components/material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserDetailsComponent,
    SearchDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
