import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-404',
  standalone: true,
  imports: [RouterOutlet],
  template: `


    <h2>PAGE 404
  </h2>

  `,
  styles: [],
})
export default class PageNotFoundComponent {}
