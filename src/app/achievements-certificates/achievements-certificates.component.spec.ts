import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsCertificatesComponent } from './achievements-certificates.component';

describe('AchievementsCertificatesComponent', () => {
  let component: AchievementsCertificatesComponent;
  let fixture: ComponentFixture<AchievementsCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
