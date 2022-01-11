import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Interpolación';
  img =
    'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';
}
