import { Component, computed, input, model } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';

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
export class InputComponent implements FormValueControl<string> {
  readonly value = model<string>("");
  readonly label = input.required<string>();
  readonly errors = input<readonly ValidationError[]>([]);
  readonly valid = input<boolean>();
  readonly disabled = input<boolean>(false);
  readonly touched = input<boolean>(false);
  readonly readonly = input<boolean>(false);

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
