import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { RouterOutlet } from '@angular/router';
import { DictionaryMainComponent } from './components/dictionary-main/dictionary-main.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Toolbar1Component } from './components/toolbar1/toolbar1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toolbar1Component, SearchBarComponent,DictionaryMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public dataService:DataService){}
  hidedropdown(){
    this.dataService.showDropDown = false
  }
}
