import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComGkcgautamAsset2sdPage } from './com-gkcgautam-asset2sd.page';

describe('ComGkcgautamAsset2sdPage', () => {
  let component: ComGkcgautamAsset2sdPage;
  let fixture: ComponentFixture<ComGkcgautamAsset2sdPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComGkcgautamAsset2sdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComGkcgautamAsset2sdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
