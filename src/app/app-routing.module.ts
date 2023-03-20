import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { TarifaComponent } from './Components/tarifa/tarifa.component';
import { VehiculoComponent } from './Components/vehiculo/vehiculo.component';

const routes: Routes = [
{path: 'reportes',component:TablaComponent},
{path: 'usuario',component:FormularioComponent},
{path: 'parqueadero',component:DashboardComponent},
{path: 'vehiculo',component:VehiculoComponent},
{path: 'factura',component:FacturaComponent},
{path: 'tarifa',component:TarifaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
