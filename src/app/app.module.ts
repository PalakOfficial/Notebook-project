import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Controller/dashboard/dashboard.component';
import { CreateNotesComponent } from './Controller/create-notes/create-notes.component';
import { HeaderComponent } from './Controller/header/header.component';
import { FooterComponent } from './Controller/footer/footer.component';
import { NotesListComponent } from './Controller/notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateNotesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
