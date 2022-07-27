import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuAdminComponent } from './category-menu-admin.component';

describe('CategoryMenuAdminComponent', () => {
  let component: CategoryMenuAdminComponent;
  let fixture: ComponentFixture<CategoryMenuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMenuAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
