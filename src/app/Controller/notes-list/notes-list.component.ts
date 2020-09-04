import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  lists: any[] = [
    {
      heading: 'Welcome',
      info: 'This is information of welcome.htryospc hfyfi dkd udif ddkl.',
      date: 'Aug 30 12:30 PM'
    },
    {
      heading: 'Notes 1',
      info: 'This is information of Notes 1.',
      date: 'Aug 30 12:30 PM'
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
