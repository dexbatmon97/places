import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablebaseComponent } from './tablebase.component';

describe('TablebaseComponent', () => {
  let component: TablebaseComponent;
  let fixture: ComponentFixture<TablebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
