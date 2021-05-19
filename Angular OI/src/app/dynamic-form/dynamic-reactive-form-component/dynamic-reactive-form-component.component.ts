import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicBase } from '@app/@shared/models/dynamic-base';
import { DynamicControlService } from '@app/@shared/services/dynamic-form.service';

@Component({
  selector: 'app-dynamic-reactive-form-component',
  templateUrl: './dynamic-reactive-form-component.component.html',
  styleUrls: ['./dynamic-reactive-form-component.component.scss'],
})
export class DynamicReactiveFormComponentComponent implements OnInit {
  @Input() dynamics: DynamicBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private dcs: DynamicControlService) {}

  ngOnInit() {
    this.form = this.dcs.toFormGroup(this.dynamics);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
