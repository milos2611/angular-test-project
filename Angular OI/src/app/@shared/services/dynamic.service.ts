import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CheckboxDynamic } from '../dynamic-functions/CheckboxDynamic';
import { DropdownDynamic } from '../dynamic-functions/DropdownDynamic';
import { TextboxDynamic } from '../dynamic-functions/TextboxDynamic';
import { DynamicBase } from '../models/dynamic-base';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {
  // TODO: get from a remote source of question metadata
  getDynamic() {
    const questions: DynamicBase<string>[] = [
      new DropdownDynamic({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 4,
        required: true,
      }),

      new TextboxDynamic({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 3,
      }),

      new TextboxDynamic({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        required: true,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
