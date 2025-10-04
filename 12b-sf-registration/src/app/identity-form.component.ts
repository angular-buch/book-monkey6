import { Component, input } from '@angular/core';

import { schema, Field, Control, hidden, disabled } from '@angular/forms/signals';

@Component({
  selector: 'identity-form',
  imports: [Control],
  template: `
    <label>Gender
      <select name="gender-identity" [control]="identity().gender">
        <option value="" selected>Please select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="diverse">Diverse</option>
      </select>
    </label>

    <div class="group-with-gap">
      @if (!identity().salutation().hidden()) {
      <label>Salutation
        <input
          type="text"
          placeholder="e. g. Mx."
          [control]="identity().salutation" />
      </label>
      }
      @if (!identity().pronoun().hidden()) {
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
  hidden(path.salutation, ({ valueOf }) => {
    return !valueOf(path.gender) || valueOf(path.gender) !== 'diverse';
  });
  hidden(path.pronoun, ({ valueOf }) => {
    return !valueOf(path.gender) || valueOf(path.gender) !== 'diverse';
  });
});
