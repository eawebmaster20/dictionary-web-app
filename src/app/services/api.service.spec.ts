import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;
  
  const currentWord = {
    word: 'keyboard',
    phonetic: '/ˈkiːbɔːd/',
    phonetics: [
      {
        text: '/ˈkibɔɹd/',
        audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
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
            definition: '(etc.) A set of keys used to operate a typewriter, computer etc.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition: 'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition: 'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return http response', () => {
    service.getWord('keyboard').subscribe((data) => {
      expect(data).toEqual([currentWord]);
    });

    const req = httpTestingController.expectOne('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard');
    expect(req.request.method).toEqual('GET');
    req.flush([currentWord]);
  });
});
