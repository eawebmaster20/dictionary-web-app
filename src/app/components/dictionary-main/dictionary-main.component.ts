import { Component } from '@angular/core';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dictionary-main',
  standalone: true,
  imports: [AudioPlayerComponent],
  templateUrl: './dictionary-main.component.html',
  styleUrl: './dictionary-main.component.scss'
})
export class DictionaryMainComponent {
constructor(public dataService:DataService){}
}
