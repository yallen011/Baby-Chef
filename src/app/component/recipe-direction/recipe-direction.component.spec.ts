import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDirectionComponent } from './recipe-direction.component';

describe('RecipeDirectionComponent', () => {
  let component: RecipeDirectionComponent;
  let fixture: ComponentFixture<RecipeDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
