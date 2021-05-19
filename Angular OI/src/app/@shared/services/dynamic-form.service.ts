import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicBase } from '../models/dynamic-base';

@Injectable({
  providedIn: 'root',
})
export class DynamicControlService {
  constructor() {}

  toFormGroup(dynamic: DynamicBase<string>[]) {
    const group: any = {};

    dynamic.forEach((dynamic) => {
      group[dynamic.key] = dynamic.required
        ? new FormControl(dynamic.value || '', Validators.required)
        : new FormControl(dynamic.value || '');
    });
    return new FormGroup(group);
  }
}
