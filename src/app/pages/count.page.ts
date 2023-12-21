import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import HomeButtonComponent from '../components/home-button/home-button';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeButtonComponent],
  template: `

<app-home-button></app-home-button>

<h2>Page</h2>
    <h4>COUNT</h4>

    <h4>ROUTER OUTLET</h4>

    <router-outlet></router-outlet>

    
  

  `,
  styles: [],
})
export default class CountComponent {}
