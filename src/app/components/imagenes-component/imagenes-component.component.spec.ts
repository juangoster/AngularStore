import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesComponentComponent } from './imagenes-component.component';

describe('ImagenesComponentComponent', () => {
  let component: ImagenesComponentComponent;
  let fixture: ComponentFixture<ImagenesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
