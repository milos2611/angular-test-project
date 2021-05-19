import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicBase } from '@app/@shared/models/dynamic-base';
import { DynamicService } from '@app/@shared/services/dynamic.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamic$: Observable<DynamicBase<any>[]>;

  constructor(dynamicService: DynamicService) {
    this.dynamic$ = dynamicService.getDynamic();
  }

  ngOnInit(): void {}
}
