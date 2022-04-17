import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepoResultComponent } from './user-repo-result.component';

describe('UserRepoResultComponent', () => {
  let component: UserRepoResultComponent;
  let fixture: ComponentFixture<UserRepoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRepoResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
