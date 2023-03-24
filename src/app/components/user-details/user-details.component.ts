import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from 'src/app/models/People';
import { Location } from 'src/app/models/Location';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Car } from 'src/app/models/Cars';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  locations: Location[] = this.dbService.getPeopleLocations(this.data.userIndex)
  cars: Car[] = this.dbService.getPeopleCars(this.data.userIndex)
  constructor(@Inject(MAT_DIALOG_DATA) public data: People, private dbService: DatabaseService,) { }
}
