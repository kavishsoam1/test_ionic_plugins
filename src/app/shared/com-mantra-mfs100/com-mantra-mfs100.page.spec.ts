import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComMantraMfs100Page } from './com-mantra-mfs100.page';

describe('ComMantraMfs100Page', () => {
  let component: ComMantraMfs100Page;
  let fixture: ComponentFixture<ComMantraMfs100Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComMantraMfs100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComMantraMfs100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
