import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(() => {
    const userServiceStub = () => ({
      getUserData: () => ({ subscribe: () => ({}) }),
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomePage],
      providers: [{ provide: UserService, useFactory: userServiceStub }],
    });
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      component.ngOnInit();
    });
  });
});
