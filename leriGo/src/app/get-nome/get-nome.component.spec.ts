import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNomeComponent } from './get-nome.component';

describe('GetNomeComponent', () => {
  let component: GetNomeComponent;
  let fixture: ComponentFixture<GetNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
