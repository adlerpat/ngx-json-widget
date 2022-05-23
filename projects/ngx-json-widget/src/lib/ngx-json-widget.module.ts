import { NgModule } from '@angular/core';
import { NgxJsonWidgetComponent } from './ngx-json-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  



@NgModule({
  declarations: [
    NgxJsonWidgetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    NgxJsonWidgetComponent
  ],
})
export class NgxJsonWidgetModule { }
