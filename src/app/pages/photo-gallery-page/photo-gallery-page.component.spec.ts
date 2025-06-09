import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryPageComponent } from './photo-gallery-page.component';

describe('PhotoGalleryPageComponent', () => {
  let component: PhotoGalleryPageComponent;
  let fixture: ComponentFixture<PhotoGalleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGalleryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
