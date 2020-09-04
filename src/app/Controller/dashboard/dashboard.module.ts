import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoute } from 'src/app/app-routing.module';
import { UsageComponent } from '../usage/usage.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsageComponent, AboutUsComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
