import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableComponent } from './ngx-datatable.component';
import { NgxDatatabeleRouting } from './ngx-datatable-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [NgxDatatableComponent],
  imports: [
    CommonModule,
    NgxDatatabeleRouting,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected', // Footer selected message
      },
    }),
  ],
})
export class NGXDatatableModule {}
