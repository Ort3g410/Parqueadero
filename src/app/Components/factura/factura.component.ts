import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { TableService } from 'src/app/Services/table.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormfacturaComponent } from 'src/app/formfactura/formfactura.component';






@Component({
  selector: 'App-Factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  displayedColumns: string[] = []
  dataSource: MatTableDataSource<any>;

  //title="Facturas"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public tableservice: TableService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.Getfactura();
   this.tableservice.titleTabla="factura"   
  }
  
    public async Getfactura() {
      await this.Api.get("Facturas").then((res) => {
        
       this.displayedColumns=Object.keys(res[0])
        this.dataSource.data = res
        this.tableservice.dataSource=res;
        
    });


  }



 

  openModal(): void{
    const dialogRef = this.dialog.open(FormfacturaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

//function Getfactura() {
  //throw new Error('Function not implemented.');
//}