import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Controller/dashboard/dashboard.component';
import { NotesListComponent } from './Controller/notes-list/notes-list.component';
import { UsageComponent } from './Controller/usage/usage.component';
import { AboutUsComponent } from './Controller/about-us/about-us.component';
import { RegisterComponent } from './Controller/register/register.component';
import { LoginComponent } from './Controller/login/login.component';
import { NoteComponent } from './Controller/note/note/note.component';

export const dashboardRoute: Routes =[

  { path: 'usage', component: UsageComponent, data: { title: 'Usage'}},
  { path: 'aboutUs', component: AboutUsComponent, data: { title: 'About Us'}},
  { path: 'register', component: RegisterComponent, data: { title: 'SignUp'}},
  { path: 'login', component: LoginComponent, data: { title: 'SignIn'}},

  { path: '', redirectTo: 'usage', pathMatch: 'full'},
];

export const notesRoute: Routes =[

  { path: 'noteslist', component: NotesListComponent, data: { title: 'Note List'}},
  { path: '', redirectTo: 'noteslist', pathMatch: 'full'},
];


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  loadChildren: () => import('./Controller/dashboard/dashboard.module').then(m => m.DashboardModule)
},
{ path: 'notepad', component: NoteComponent,
  loadChildren: () => import('./Controller/note/note.module').then(m => m.NoteModule)
},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
