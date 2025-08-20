import { Component, input } from '@angular/core';

import { schema, Field, Control, hidden, disabled } from '@angular/forms/signals';

@Component({
  selector: 'identity-form',
  imports: [Control],
  template: `
    <label>Gender
      <!-- TODO: [control] seems not to work with <select> right now? -->
      <select name="gender-identity" [control]="identity().gender">
        <option value="" selected>Please select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="diverse">Diverse</option>
      </select>
    </label>

    <div class="group-with-gap">
      @if (!identity().salutation().disabled()) {
      <label>Salutation
        <input
          type="text"
          placeholder="e. g. Mx."
          [control]="identity().salutation">
      </label>
      }
      @if (!identity().pronoun().disabled()) {
      <label>Pronoun
        <input
          type="text"
          placeholder="e. g. they/them"
          [control]="identity().pronoun">
      </label>
      }
    </div>

  `,
})
export class IdentityForm {
  readonly identity = input.required<Field<GenderIdentity>>();
}

export interface GenderIdentity {
  gender: '' | 'male' | 'female' | 'diverse';
  salutation: string; // e. g. "Mx.", "Dr.", etc.
  pronoun: string; // e. g. "they/them"
}

export const identitySchema = schema<GenderIdentity>((path) => {
  // TODO: acutally switch to "hidden" once available
  disabled(path.salutation, ({ valueOf }) => {
    return !valueOf(path.gender) || valueOf(path.gender) !== 'diverse';
  });
  // TODO: acutally switch to "hidden" once available
  disabled(path.pronoun, ({ valueOf }) => {
    return !valueOf(path.gender) || valueOf(path.gender) !== 'diverse';
  });
});
