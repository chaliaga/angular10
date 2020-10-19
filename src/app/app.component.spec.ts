import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuService } from './component/menu/menu.service';
import MockConstants from './util/mock-constants';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let menuService: MenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule, HttpClientTestingModule, BrowserAnimationsModule
          ],
          declarations: [
            AppComponent
          ],
          providers: [ MenuService ],
          schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        menuService = TestBed.inject(MenuService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('number of dishes added to the cart should be four', () => {
        // let dishes = spyOn(menuService, 'getRecipes').and.returnValue(of(MockConstants.getMockSearchCassandraResponse()));
        // component.menuService.addToCart();
      MockConstants.getMockSearchCassandraResponse().results.forEach(dish => menuService.cart.push(dish));
      expect(component.totalDishes()).toBe('4');
    });

    it('should destroy the app', () => {
        component.ngOnDestroy();
        expect(component).toBeTruthy();
    });
});
