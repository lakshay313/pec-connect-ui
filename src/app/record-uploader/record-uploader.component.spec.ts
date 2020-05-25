import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUploaderComponent } from './record-uploader.component';

describe('RecordUploaderComponent', () => {
  let component: RecordUploaderComponent;
  let fixture: ComponentFixture<RecordUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
