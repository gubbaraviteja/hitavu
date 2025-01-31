import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpskillComponent } from './upskill.component';

describe('UpskillComponent', () => {
  let component: UpskillComponent;
  let fixture: ComponentFixture<UpskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpskillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
