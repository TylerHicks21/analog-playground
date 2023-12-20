import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-404',
  standalone: true,
  imports: [RouterOutlet],
  template: `


    <h2>TEST 404
  </h2>

  `,
  styles: [],
})
export default class TestNotFoundComponent {}
