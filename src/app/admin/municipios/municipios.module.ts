import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiduriasModule } from './regidurias/regidurias.module';
import { ActivacionModule } from './activacion/activacion.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegiduriasModule,
    InscripcionModule,
    ActivacionModule,
  ],
})
export class MunicipiosModule {}
