import { Component, model, input, effect } from '@angular/core';

import { FormValueControl, ValidationError } from '@angular/forms/signal-experimental';

@Component({
  selector: 'app-multiselect',
  template: `
    <details class="dropdown" [ariaDisabled]="disabled()">
      <summary>
        {{ label() }}
      </summary>
      @if(!(disabled())) {
      <ul>
        @for(topic of allTopics; track $index) {
        <li>
          <label>
            <input
              type="checkbox"
              [name]="topic"
              [checked]="value().includes(topic)"
              (input)="changeInput(topic, $event)" />
            {{ topic }}
          </label>
        </li>
        }
      </ul>
      }
  </details>
    `,
  styles: `
    [aria-disabled=true] {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  `,
})
export class MultiselectComponent implements FormValueControl<string[]> {
  readonly allTopics = ['Angular', 'Vue', 'React'];
  readonly value = model<string[]>([]);
  readonly label = input.required<string>();
  readonly errors = input<readonly ValidationError[]>();
  readonly disabled = input<boolean>();

  changeInput(topic: string, e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    const isInModel = this.value().includes(topic) && checked;
    if (!isInModel && checked) {
      this.value.update((current) => [...current, topic]);
      return;
    }
    if (!checked) {
      this.value.update((current) => current.filter((t) => t !== topic));
    }
  }

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.value.set([]);
      }
    });
  }
}
