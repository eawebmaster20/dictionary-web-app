import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar1Component } from './components/toolbar1/toolbar1.component';
import { Toolbar2Component } from './components/toolbar2/toolbar2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toolbar1Component, Toolbar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dictionary-web-app';
}
