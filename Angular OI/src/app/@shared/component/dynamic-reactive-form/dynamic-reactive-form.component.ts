import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicBase } from '@app/@shared/models/dynamic-base';

@Component({
  selector: 'app-dynamic-reactive-form',
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.scss'],
})
export class DynamicReactiveFormComponent implements OnInit {
  @Input() dynamic: DynamicBase<string>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.dynamic.key].valid;
  }

  ngOnInit() {}
}
