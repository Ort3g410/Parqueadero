import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { TableService } from 'src/app/Services/table.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';




@Component({
  selector: 'App-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  displayedColumns: string[] = []
  dataSource: MatTableDataSource<any>;

  //title="Usuarios"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public tableservice: TableService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetUsuarios();
   this.tableservice.titleTabla="usuarios"   
  }
  
    public async GetUsuarios() {
      await this.Api.get("Usuarios").then((res) => {
        
       this.displayedColumns=Object.keys(res[0])
        this.dataSource.data = res
        this.tableservice.dataSource=res;
        
    });


  }



 

  openModal(): void{
    const dialogRef = this.dialog.open(FormularioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

//function GetUsuarios() {
  //throw new Error('Function not implemented.');
//}
