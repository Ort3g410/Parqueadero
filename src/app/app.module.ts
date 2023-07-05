import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { VehiculoComponent } from './Components/vehiculo/vehiculo.component';
import { ParqueaderoComponent } from './Components/parqueadero/parqueadero.component';
import { FacturaComponent } from './Components/factura/factura.component';
import { TarifaComponent } from './Components/tarifa/tarifa.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
/**import { DashboardComponent } from './Components/dashboard/dashboard.component';*/
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { TabletemplateComponent } from './Components/tabletemplate/tabletemplate.component';
import { FormvehiculosComponent } from './formvehiculos/formvehiculos.component';
import { FormparqueaderoComponent } from './formparqueadero/formparqueadero.component';

import { FormreportesComponent } from './formreportes/formreportes.component';
import { FormfacturaComponent } from './formfactura/formfactura.component';
import { LoginComponent } from './Components/login/login.component';
import { TablaComponent } from './Components/tabla/tabla.component';











@NgModule({
  declarations:[
    AppComponent,
    MenuComponent,
    UsuarioComponent,
    VehiculoComponent,
    ParqueaderoComponent,
    FacturaComponent,
    TarifaComponent,
    ReportesComponent,
    FormularioComponent,
    TabletemplateComponent,
    FormvehiculosComponent,
    FormparqueaderoComponent,
    FormreportesComponent,
    FormfacturaComponent,
    LoginComponent,
    TablaComponent,
   
    
    
    
    
    
   
    
   
    /*DashboardComponent*/
  ],
  imports: [[BrowserModule, AppRoutingModule],
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule,
    AvatarModule,
    HttpClientModule,
    MatFormFieldModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }