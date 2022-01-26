import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurcodeworldFilebrowserPage } from './ourcodeworld-filebrowser.page';

describe('OurcodeworldFilebrowserPage', () => {
  let component: OurcodeworldFilebrowserPage;
  let fixture: ComponentFixture<OurcodeworldFilebrowserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcodeworldFilebrowserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurcodeworldFilebrowserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
