import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormvehiculosComponent } from 'src/app/formvehiculos/formvehiculos.component';

@Component({
  selector: 'App-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  displayedColumns: string[] = []
  dataSource: MatTableDataSource<any>;

  //title="vehiculos"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public tableservice: TableService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.Getvehiculoes();
   this.tableservice.titleTabla="vehiculoes"   
  }
  
    public async Getvehiculoes() {
      await this.Api.get("vehiculoes").then((res) => {
        
       this.displayedColumns=Object.keys(res[0])
        this.dataSource.data = res
        this.tableservice.dataSource=res;
        
    });


  }


 

  openModal(): void{
    const dialogRef = this.dialog.open(FormvehiculosComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

//function Getvehiculoes() {
  //throw new Error('Function not implemented.');
//}