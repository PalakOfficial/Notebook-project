import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }
  goToLogin(){
    this.router.navigate(['../login'], { relativeTo: this.route });
  }

  goToRegister(){
  this.router.navigate(['../register'], { relativeTo: this.route });
  }


}
