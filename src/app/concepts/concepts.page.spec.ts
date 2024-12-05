import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConceptsPage } from './concepts.page';

describe('ConceptsPage', () => {
  let component: ConceptsPage;
  let fixture: ComponentFixture<ConceptsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
