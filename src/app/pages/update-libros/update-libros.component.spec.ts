import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLibrosComponent } from './update-libros.component';

describe('UpdateLibrosComponent', () => {
  let component: UpdateLibrosComponent;
  let fixture: ComponentFixture<UpdateLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
