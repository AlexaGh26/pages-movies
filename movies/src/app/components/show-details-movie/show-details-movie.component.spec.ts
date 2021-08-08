import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsMovieComponent } from './show-details-movie.component';

describe('ShowDetailsMovieComponent', () => {
  let component: ShowDetailsMovieComponent;
  let fixture: ComponentFixture<ShowDetailsMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
