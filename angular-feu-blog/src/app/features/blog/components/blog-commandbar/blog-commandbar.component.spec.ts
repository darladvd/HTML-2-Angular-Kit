import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommandbarComponent } from './blog-commandbar.component';

describe('BlogCommandbarComponent', () => {
  let component: BlogCommandbarComponent;
  let fixture: ComponentFixture<BlogCommandbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCommandbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommandbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
