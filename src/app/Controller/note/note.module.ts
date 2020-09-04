import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { RouterModule } from '@angular/router';
import { notesRoute } from 'src/app/app-routing.module';



@NgModule({
  declarations: [NoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(notesRoute)
  ]
})
export class NoteModule { }
