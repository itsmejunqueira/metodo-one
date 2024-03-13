import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheMethodComponent } from './the-method.component';


describe('TheMethodComponent', () => {
  let component: TheMethodComponent;
  let fixture: ComponentFixture<TheMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheMethodComponent],
    });
    fixture = TestBed.createComponent(TheMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
