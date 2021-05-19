import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [CommonModule, DragAndDropRoutingModule, DragDropModule],
})
export class DragAndDropModule {}
