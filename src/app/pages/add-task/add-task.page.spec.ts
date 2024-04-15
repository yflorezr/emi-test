import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskPage } from './add-task.page';

describe('TodoComponent', () => {
  let component: AddTaskPage;
  let fixture: ComponentFixture<AddTaskPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
