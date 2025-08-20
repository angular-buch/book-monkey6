import { Component, input } from '@angular/core';

import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-form-error',
  template: `
    <small>
    @for(error of errors(); track $index) {
      {{ error.message}}
      @if(!$last) {
        <br/>
      }
    }
    </small>
    `,
  styles: `
    :host {
      display: block;
      margin-top: -0.75rem;
      margin-bottom: 1rem;
      color: #bb2233;
    }
  `,
})
export class FormErrorComponent {
  errors = input<readonly ValidationError[]>([]);
}
