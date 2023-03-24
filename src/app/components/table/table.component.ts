import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { People } from 'src/app/models/People';
import { DatabaseService } from 'src/app/services/database/database.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = ['fullName', 'phoneNumber', 'birthday', 'details'];
  peoples = this.dbService.getAllPeople();
  dataSource: MatTableDataSource<{ fullName: string, phoneNumber: string, birthday: string, index: string }> = new MatTableDataSource(this.dbService.getAllPeople().map(p => ({
    fullName: p.fullName,
    phoneNumber: p.phoneNumber,
    birthday: p.birthday,
    index: p.userIndex
  })));
  dialogRef: MatDialogRef<UserDetailsComponent> | undefined
  dialogLocationRef: MatDialogRef<SearchDialogComponent> | undefined

  constructor(private dbService: DatabaseService, public dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  showPeopleDetails(pIndex: string) {
    this.dialogRef = this.dialog.open(UserDetailsComponent, {
      data: this.peoples.find(p => p.userIndex === pIndex),
    });
  }

  applyFilter(ev: KeyboardEvent) {
    const target: any = ev.target
    this.dataSource.filter = target.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  searchLocations() {
    this.dialogLocationRef = this.dialog.open(SearchDialogComponent);
  }
}
