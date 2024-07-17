import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryMainComponent } from './dictionary-main.component';

describe('DictionaryMainComponent', () => {
  let component: DictionaryMainComponent;
  let fixture: ComponentFixture<DictionaryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DictionaryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
