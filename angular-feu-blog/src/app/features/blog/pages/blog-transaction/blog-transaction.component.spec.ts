import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTransactionComponent } from './blog-transaction.component';

describe('BlogTransactionComponent', () => {
  let component: BlogTransactionComponent;
  let fixture: ComponentFixture<BlogTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
