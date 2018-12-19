export interface IAddress {
    text: string;
    value: number;
    children?: IAddress[];
}

export class Province implements IAddress {
    text: string;
    value: number;
    children: City[];
}

export class City implements IAddress {
    text: string;
    value: number;
    children: SubCity[];
}

export class SubCity implements IAddress {
    text: string;
    value: number;
}

export interface IRegion {
    province: Province;
    city: City;
    subCity: SubCity;
}

export class Region implements IRegion {
    province: Province;
    city: City;
    subCity: SubCity;
    constructor() {

    }
}
