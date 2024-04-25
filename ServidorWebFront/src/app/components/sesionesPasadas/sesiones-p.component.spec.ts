import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesPComponent } from './sesiones-p.component';

describe('SesionesPComponent', () => {
  let component: SesionesPComponent;
  let fixture: ComponentFixture<SesionesPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesionesPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SesionesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
