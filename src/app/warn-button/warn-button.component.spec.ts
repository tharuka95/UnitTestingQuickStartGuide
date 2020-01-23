import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WarnButtonComponent } from './warn-button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WarnService } from './warn.service';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';

describe('WarnButtonComponent', () => {
  let component: WarnButtonComponent;
  let fixture: ComponentFixture<WarnButtonComponent>;
  let de: DebugElement;
  let spy;


  beforeEach(async(() => {
    spy = jasmine.createSpyObj('WarnService', ['getUserList']);
    spy.getUserList.and.returnValue(of([]));
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ WarnButtonComponent ],
      providers: [{ provide: WarnService, useValue: spy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have severity of 423', () => {
    expect(component.severity).toBeLessThanOrEqual(423);
  });

  it(('should have h1'), () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
    expect(de.query(By.css('p')).nativeElement.innerText).toContain('Warning');
  });

  it(('should have to toggle button from toggle method'), () => {
      expect(component.hideContent).toBeTruthy();
      component.toggle();
      expect(component.hideContent).toBeFalsy();
  });

  it(('Should contains tick'), fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  it(('should use jasmine spies'), () => {
    spyOn(component, 'toggle');
    component.toggle();
    //component.toggle();
    expect(component.toggle).toHaveBeenCalledTimes(1);
  });

  it(('should use jasmine spies Mocks'), () => {
    //spyOn(spy, 'getUserList');
    //component.ngOnInit();
    //component.toggle();
    expect(spy.getUserList).toHaveBeenCalledTimes(1);
  });

});
