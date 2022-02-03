import { NgModule } from '@angular/core';
import { NgxImageFileInputComponent } from './ngx-image-file-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    NgxImageFileInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxImageFileInputComponent
  ]
})
export class NgxImageFileInputModule { }
