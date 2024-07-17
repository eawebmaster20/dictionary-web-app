import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar1Component } from './components/toolbar1/toolbar1.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DictionaryMainComponent } from './components/dictionary-main/dictionary-main.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-rooted',
  standalone: true,
  imports: [RouterOutlet, Toolbar1Component, SearchBarComponent,DictionaryMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public dataService:DataService){}
}
