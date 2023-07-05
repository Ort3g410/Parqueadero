import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParqueaderoComponent } from './Components/parqueadero/parqueadero.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { TarifaComponent } from './Components/tarifa/tarifa.component';
import { VehiculoComponent } from './Components/vehiculo/vehiculo.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import {  FormreportesComponent } from './formreportes/formreportes.component';
import { FormvehiculosComponent } from './formvehiculos/formvehiculos.component';
//import { TabletemplayComponent} from './Components/tabletemplay/tabletemplay.component';
import {  FormparqueaderoComponent } from './formparqueadero/formparqueadero.component';
import { FormfacturaComponent } from './formfactura/formfactura.component';
import { LoginComponent } from './Components/login/login.component';




const routes: Routes = [
{path: 'reportes',component:ReportesComponent},
{path: 'usuario',component:UsuarioComponent},
{path: 'parqueadero',component:ParqueaderoComponent},
{path: 'vehiculo',component:VehiculoComponent},
{path: 'factura',component:FacturaComponent},
{path: 'tarifa',component:TarifaComponent},
{path: 'formulario',component:FormularioComponent},
//{path: 'form1',component:Form1Component}
{path:'formvehiculo',component:FormvehiculosComponent},
{path:'formulario',component:FormparqueaderoComponent},
{path:'formresportes',component:FormreportesComponent},
{path:'Formfactura',component:FormfacturaComponent },
{path:'login',component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



