import { ColorSpicyPipe } from './color-spicy.pipe';
import { SPICY } from './constanst';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ColorSpicyPipe', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  }));

  it('Exist Pipe', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new ColorSpicyPipe(domSanitizer);
    const spicy = SPICY.NOPICA;
    const noPicaClass = 'blue';

    const result = pipe.transform(spicy);
    expect(pipe).toBeTruthy();
  }));

  it('Change Color label to blue based on level spicy NO PICA', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new ColorSpicyPipe(domSanitizer);
    const spicy = SPICY.NOPICA;
    const result = pipe.transform(spicy);
    expect(result.toString()).toContain('blue');
  }));

  it('Change Color label to red based on level spicy NO PICA', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new ColorSpicyPipe(domSanitizer);
    const spicy = SPICY.PICAMUCHO;
    const result = pipe.transform(spicy);
    expect(result.toString()).toContain('red');
  }));

  it('Change Color label to orange based on level spicy NO PICA', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new ColorSpicyPipe(domSanitizer);
    const spicy = SPICY.PICAPOCO;
    const result = pipe.transform(spicy);
    expect(result.toString()).toContain('orange');
  }));
});
