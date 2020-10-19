import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import MockConstants from '../../util/mock-constants';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let menuService: MenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, HttpClientTestingModule, BrowserAnimationsModule
            ],
            declarations: [
                MenuComponent
            ],
            providers: [ MenuService, { provide: ComponentFixtureAutoDetect, useValue: true}],

            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
        menuService = TestBed.inject(MenuService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the menu component', () => {
        expect(component).toBeTruthy();
    });

    it('number of dishes should be four', () => {
        spyOn(menuService, 'getRecipes').and.returnValue(of(MockConstants.getMockSearchCassandraResponse()));
        component.populateMenu();
        expect(menuService.getRecipes).toHaveBeenCalled();
        fixture.detectChanges();
        // const items = fixture.debugElement.query(By.css('.product-grid-item-content'));
        const items = component.dishesAll.length;
        expect(items).toEqual(4);
    });
});
