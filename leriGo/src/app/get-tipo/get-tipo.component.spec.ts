import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTipoComponent } from './get-tipo.component';

describe('GetTipoComponent', () => {
  let component: GetTipoComponent;
  let fixture: ComponentFixture<GetTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
