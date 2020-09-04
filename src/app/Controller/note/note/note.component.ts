import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  login: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }

  logout(){
    this.router.navigate(['../dashboard/'], { relativeTo: this.route });
    alert('Logged Out Successfully.');
    localStorage.setItem('login', 'false');
  }
}
