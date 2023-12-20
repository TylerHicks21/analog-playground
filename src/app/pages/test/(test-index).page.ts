import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-outlet',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `


    <h2>TEST-Index</h2>

    <div class="card">
      <button type="button" [routerLink]="['/test/test-outlet']" >GOTO TEST OUTLET</button>
    </div>

  `,
  styles: [],
})
export default class TestIndexComponent {}
