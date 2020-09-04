import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  registerUser(){
    console.log('Input Data', this.registerForm.value);
    if( this.registerForm.value.password !== this.registerForm.value.passwordConfirm){
      this.router.navigate(['../register'], { relativeTo: this.route });
      alert('Please Enter correct Password');
      this.registerForm.reset();
    }
    else{
      this.router.navigate(['../login'], { relativeTo: this.route });
    }
  }

}
