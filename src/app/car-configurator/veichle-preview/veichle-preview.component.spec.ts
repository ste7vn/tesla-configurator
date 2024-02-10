import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeichlePreviewComponent } from './veichle-preview.component';

describe('VeichlePreviewComponent', () => {
  let component: VeichlePreviewComponent;
  let fixture: ComponentFixture<VeichlePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeichlePreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeichlePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
