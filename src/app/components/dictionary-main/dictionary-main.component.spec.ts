import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionaryMainComponent } from './dictionary-main.component';
import { DataService } from '../../services/data.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('DictionaryMainComponent', () => {
  let component: DictionaryMainComponent;
  let fixture: ComponentFixture<DictionaryMainComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    // Create the spy object and ensure all necessary properties are defined
    dataServiceSpy = jasmine.createSpyObj('DataService', ['getNewWord'], {
      httpError: { message: '', title: '', resolution: '' },
      // searchTerm: '',
      validation: false,
      lightThemeSet: false,
      currentTheme: 'light-mode',
      selectedFont: { name: 'mono', value: `"Inter", sans-serif` },
      fontFamilies: ['sans serif', 'serif', 'mono'],
      currentWord: {
        word: 'keyboard',
        phonetic: '/ˈkiːbɔːd/',
        phonetics: [
          {
            text: '/ˈkibɔɹd/',
            audio:
              'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
            sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
            license: {
              name: 'BY-SA 3.0',
              url: 'https://creativecommons.org/licenses/by-sa/3.0',
            },
          },
          {
            text: '/ˈkiːbɔːd/',
            audio: '',
          },
          {
            text: '/ˈkiːbɔːd/',
            audio: '',
          },
        ],
        meanings: [
          {
            partOfSpeech: 'noun',
            definitions: [
              {
                definition:
                  '(etc.) A set of keys used to operate a typewriter, computer etc.',
                synonyms: [],
                antonyms: [],
              },
              {
                definition:
                  'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
                synonyms: [],
                antonyms: [],
              },
              {
                definition:
                  'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
                synonyms: [],
                antonyms: [],
              },
            ],
            synonyms: ['electronic keyboard'],
            antonyms: [],
          },
          {
            partOfSpeech: 'verb',
            definitions: [
              {
                definition: 'To type on a computer keyboard.',
                synonyms: [],
                antonyms: [],
                example: 'Keyboarding is the part of this job I hate the most.',
              },
            ],
            synonyms: [],
            antonyms: [],
          },
        ],
        license: {
          name: 'CC BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
        sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
      }
    });

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DictionaryMainComponent  // Import the standalone component here
      ],
      providers: [{ provide: DataService, useValue: dataServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
