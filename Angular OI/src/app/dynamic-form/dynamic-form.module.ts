import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormRoutingModule } from './dynamic-form.module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { DynamicReactiveFormComponentComponent } from './dynamic-reactive-form-component/dynamic-reactive-form-component.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DynamicFormComponent, DynamicReactiveFormComponentComponent],
  imports: [CommonModule, DynamicFormRoutingModule, ReactiveFormsModule, SharedModule, TranslateModule],
})
export class DynamicFormModule {}
