import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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
});
