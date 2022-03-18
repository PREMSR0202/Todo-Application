import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const Modules = [CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()];

@NgModule({
  declarations: [],
  imports: [
    Modules,
  ],
  exports: []
})
export class SharedModule { }
