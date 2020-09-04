import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  signIn(){
    console.log('login data', this.loginForm.value);
    if( this.loginForm.value.email === 'palak@gmail.com' && this.loginForm.value.password === 'palak'){
      alert('Successfully Logged In');
      localStorage.setItem('login', 'true');
      this.router.navigate(['../../notepad/noteslist'], { relativeTo: this.route });
    }
    else{
      localStorage.setItem('login', 'false');
    }
  }

}
