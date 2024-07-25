import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTogglerComponent } from './theme-toggler.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ThemeTogglerComponent', () => {
  let component: ThemeTogglerComponent;
  let fixture: ComponentFixture<ThemeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeTogglerComponent,HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
