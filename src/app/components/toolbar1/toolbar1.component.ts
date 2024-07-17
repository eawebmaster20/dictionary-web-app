import { Component } from '@angular/core';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';

@Component({
  selector: 'app-toolbar1',
  standalone: true,
  imports: [ThemeTogglerComponent],
  templateUrl: './toolbar1.component.html',
  styleUrl: './toolbar1.component.scss'
})
export class Toolbar1Component {

}
