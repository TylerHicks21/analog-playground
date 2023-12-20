import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-outlet',
  standalone: true,
  imports: [RouterOutlet],
  template: `


    <h2>TEST-OUTLET</h2>

  `,
  styles: [],
})
export default class TestOutletComponent {}
