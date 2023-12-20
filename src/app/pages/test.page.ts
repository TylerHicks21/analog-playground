import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `

<div class="card">
      <button type="button" [routerLink]="['/']" >GOTO HOME</button>
    </div>

<h2>Page</h2>
    <h4>TEST</h4>

    <h4>ROUTER OUTLET</h4>

    <router-outlet></router-outlet>

    
  

  `,
  styles: [],
})
export default class TestComponent {}
