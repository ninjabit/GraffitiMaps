import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { MyComponent } from './components/my-component';

@NgModule({
  declarations: [
    MyComponent
  ],
  providers: [ ],
  exports: [
    MyComponent
  ],
  imports: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StreetartloversCoreModule {}
