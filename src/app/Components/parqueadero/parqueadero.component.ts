import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormparqueaderoComponent} from 'src/app/formparqueadero/formparqueadero.component';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {


  displayedColumns: string[] = []
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public tableservice: TableService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetParkings();
    this.tableservice.titleTabla="parqueadero" 
  }
  public async GetParkings() {
    await this.Api.get("Parkings").then((res) => {
      this.loadTable([res[0]])
      this.dataSource.data = res
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  
    

  loadTable(data: any[]) {

    for (let column in data[0]) {

      this.displayedColumns.push(column)
    }
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openModal(): void{
    const dialogRef = this.dialog.open(FormparqueaderoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}