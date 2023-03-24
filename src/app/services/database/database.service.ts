import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/Cars';
import { People } from 'src/app/models/People';
import { Location } from 'src/app/models/Location';
import carJson from './cars.json';
import locationsJson from './location.json';
import peopleJson from './people.json';
import { CarOwner } from 'src/app/models/CarOwner';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  peoples: People[]
  cars: Car[]
  locations: Location[]
  constructor() {
    this.peoples = peopleJson;
    this.cars = carJson;
    this.locations = locationsJson;
  }

  getAllPeople(): People[] {
    return this.peoples;
  }

  getPeopleCars(index: string): Car[] {
    return this.cars.filter(c => c.userIndex === index);
  }

  getPeopleLocations(index: string): Location[] {
    const data = this.getPeopleCars(index).map(c => this.locations.filter(l => l.carNumber === c.carNumber));
    return data.flat(1);
  }

  getLocations(): Location[] {
    const data = this.locations;
    return data;
  }

  getLocationCarOwners(l: Location): CarOwner[] {
    return this.cars.filter(c => c.carNumber == l.carNumber)
      .map(c => ({ car: c, owner: this.peoples.find(p => p.userIndex === c.userIndex) }))
  }
}
