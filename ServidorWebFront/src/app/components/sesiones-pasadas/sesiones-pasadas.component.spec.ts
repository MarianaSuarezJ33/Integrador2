import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesPasadasComponent } from './sesiones-pasadas.component';

describe('SesionesPasadasComponent', () => {
  let component: SesionesPasadasComponent;
  let fixture: ComponentFixture<SesionesPasadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesionesPasadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SesionesPasadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
