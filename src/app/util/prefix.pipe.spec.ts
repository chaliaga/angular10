import { PrefixPipe } from './prefix.pipe';

describe('PrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new PrefixPipe();
    expect(pipe).toBeTruthy();
  });

  it('the value should be prefix by your selected the dish', () => {
    const pipe = new PrefixPipe();
    const name = 'ceviche';
    const expectedResult = 'You selected the dish: Ceviche';


    const result = pipe.transform(name);
    expect(result).toBe(expectedResult);
  });
});
