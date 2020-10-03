import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import * as countriesJSON from './../../assets/json/countries.json';
import { UpperCasePipe } from '@angular/common';
import { PrefixPipe } from '../util/prefix.pipe';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [UpperCasePipe, PrefixPipe]
})
export class CountryComponent implements OnInit {
  selected: Country;
  countries: Country[] = [];
  birthday = new Date();
  total = 123456.56565;

  constructor(private upperCasePipe: UpperCasePipe, private prefixPipe: PrefixPipe) {
    // this.countries = countriesJSON;
    this.selected = countriesJSON[10];
  }

  ngOnInit(): void {
    console.log(this.countries);
    // console.log(this.countries.filter(x => x. === 'Buenos Aires'));
    console.log(this.selected.capital);
  }

  send(name: string): void {
    /*
    console.log('Antes :::', name);
    name = this.upperCasePipe.transform(name);
    console.log('Despues :::', name);
    */

    console.log('Antes :::', name);
    name = this.prefixPipe.transform(name);
    console.log('Despues :::', name);
  }
}
