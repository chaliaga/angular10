import { Pipe, PipeTransform } from '@angular/core';
import { SPICY } from './constanst';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'colorSpicy'
})
export class ColorSpicyPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  private replaceString: string;

  transform(spicy: SPICY): SafeHtml{
    switch (spicy) {
      case SPICY.NOPICA: {
        this.replaceString = '<span class="blue" style="color: blue; text-decoration: underline;">No Pica</span>';
        return this.sanitized.bypassSecurityTrustHtml(this.replaceString);
      }
      case SPICY.PICAPOCO: {
        this.replaceString = '<span class="orange" style="color: orange; text-decoration: underline;">Pica Poco</span>';
        return this.sanitized.bypassSecurityTrustHtml(this.replaceString);
      }
      case SPICY.PICAMUCHO: {
        this.replaceString = '<span class="red" style="color: red; text-decoration: underline;">Pica Mucho</span>';
        return this.sanitized.bypassSecurityTrustHtml(this.replaceString);
      }
    }
  }
}
