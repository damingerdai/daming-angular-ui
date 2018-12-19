import { City } from './../../model/address';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoreModule } from '../core.module';
import { IRegion, Region, Province, SubCity } from '../../model/address';

function toRegion(provinces: Province[]): IRegion[] {
  const regions: Region[] = [];
  provinces.forEach(province => {
    province.children.forEach(city => {
      city.children.forEach(subCity => {
        const region: Region = new Region();
        region.province = province;
        region.city = city;
        region.subCity = subCity;
        regions.push(region);
      });
    });
  });
  return regions;
}

@Injectable({
  providedIn: CoreModule
})
export class AddressService {

  private _address$: Observable<IRegion[]>;

  set address$(_address$: Observable<IRegion[]>) {
    this._address$ = _address$;
  }

  get address$() {
    return this._address$;
  }

  constructor(private http: HttpClient) {
    this.address$ = this.http.get<Province[]>('assets/address.json').pipe(
      map(provinces => toRegion(provinces))
    );
  }
}
