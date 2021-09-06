
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [],
})
export class MaterialAngularModule {
  constructor() {
    console.log('Material Angular initialised');
  }
}
