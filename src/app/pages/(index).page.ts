import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `

<div class="card">
      <button type="button" [routerLink]="['/test']" >GOTO TEST</button>
    </div>

    <div class="card">
      <button type="button" [routerLink]="['/count']" >GOTO COUNT</button>
    </div>


<h2>Page</h2>
    <h4>HOME INDEX</h4>

    <h4>ROUTER OUTLET</h4>

 


  `,
  styles: [
    `


    `,
  ],
})
export default class HomeComponent {

}
