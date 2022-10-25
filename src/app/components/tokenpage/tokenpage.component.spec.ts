import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenpageComponent } from './tokenpage.component';

describe('TokenpageComponent', () => {
  let component: TokenpageComponent;
  let fixture: ComponentFixture<TokenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
