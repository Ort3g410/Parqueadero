import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormreportesComponent } from 'src/app/formreportes/formreportes.component';

@Component({
  selector: 'App-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  displayedColumns: string[] = []
  dataSource: MatTableDataSource<any>;

  //title="Reportes"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public tableservice: TableService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetReportes();
   this.tableservice.titleTabla="Reportes"   
  }
  
    public async GetReportes() {
      await this.Api.get("Reportes").then((res) => {
        
       this.displayedColumns=Object.keys(res[0])
        this.dataSource.data = res
        this.tableservice.dataSource=res;
        
    });


  }


 

  openModal(): void{
    const dialogRef = this.dialog.open(FormreportesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

//function GetReportes() {
  //throw new Error('Function not implemented.');
//}
