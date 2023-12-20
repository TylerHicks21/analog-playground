import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-outlet',
  standalone: true,
  imports: [RouterOutlet],
  template: `


    <h2>Count-OUTLET</h2>


    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

    <div class="card">
      <button type="button" (click)="reset()">Reset Count</button>
    </div>


  `,
  styles: [],
})
export default class CountOutletComponent {
  count = 0;

  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}
