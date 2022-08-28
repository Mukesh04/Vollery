import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
  ],
  exports: [
    FontAwesomeModule,
    NgbModule,
    NgSelectModule,
  ]
})
export class SharedModule { }
