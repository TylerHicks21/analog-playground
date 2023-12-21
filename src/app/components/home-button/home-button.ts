import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [RouterLink],
  template: `

<div class="card">
      <button type="button" [routerLink]="['/']" >HOME BUTTON</button>
    </div>

  `,
  styles: [
    `


    `,
  ],
})
export default class HomeButtonComponent {

}