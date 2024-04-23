import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {path: 'animal', loadChildren: () => import('./animal/animal.module').then(m=>m.AnimalModule)},
  {path: 'almacen', loadChildren: ()=> import('./almacen/almacen.module').then(m=> m.AlmacenModule)},
  {path: 'adopcion', loadChildren: ()=> import('./adopcion/adopcion.module').then(m=> m.AdopcionModule)},
  {path: 'rescate', loadChildren: ()=> import('./rescate/rescate.module').then(m=> m.RescateModule)},
  {path: 'miscelaneo', loadChildren: ()=> import('./miscelaneo/miscelaneo.module').then(m=> m.MiscelaneoModule)},
  {path: 'salud', loadChildren: ()=> import('./salud/salud.module').then(m=> m.SaludModule)},
  {path: 'tercero', loadChildren: ()=> import('./tercero/tercero.module').then(m=> m.TerceroModule)},
  {path: 'vehiculo', loadChildren: ()=> import('./vehiculo/vehiculo.module').then(m=> m.VehiculoModule)},
  {path: '**', redirectTo: ''}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
