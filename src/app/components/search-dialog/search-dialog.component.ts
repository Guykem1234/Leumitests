import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Location } from 'src/app/models/Location';
import { CarOwner } from 'src/app/models/CarOwner';


@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent {
  locations: Location[] = this.dbService.getLocations()

  selection: Location | undefined
  selectionCarOwners: CarOwner[] | undefined

  constructor(private dbService: DatabaseService,) { }


  onSelect(l: any) {
    this.selection = l
    this.selectionCarOwners = this.dbService.getLocationCarOwners(l);
  }
}
