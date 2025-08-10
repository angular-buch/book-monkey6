import { Component, model, input, computed } from '@angular/core';

import { FormValueControl, ValidationError } from '@angular/forms/signal-experimental';
import { FormErrorComponent } from './form-error.component';

@Component({
  selector: 'app-input',
  template: `
    <label>{{ label() }}
      <input
        type="text"
        [value]="value()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [attr.aria-invalid]="ariaInvalidState()"
        (input)="changeInput($event)">
      @if(touched() && errors()) {
      <app-form-error [errors]="errorsList()" />
      }
    </label>
  `,
  imports: [FormErrorComponent],
})
export class InputComponent implements FormValueControl<string | undefined> {
  readonly value = model<string>();
  readonly label = input.required<string>();
  readonly errors = input<readonly ValidationError[]>();
  readonly disabled = input<boolean>();
  readonly touched = input<boolean>();
  readonly valid = input<boolean>();
  readonly readonly = input<boolean>();

  protected readonly errorsList = computed(() => {
    return this.errors() || [];
  });

  protected ariaInvalidState(): boolean | undefined {
    if (!this.touched()) {
      return undefined;
    } else {
      return this.errorsList().length > 0 && this.touched();
    }
  }

  changeInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.value.set(value);
  }
}
