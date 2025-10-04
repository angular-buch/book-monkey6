import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Control, customError, CustomValidationError, FieldState, form, submit, ValidationError, WithField } from '@angular/forms/signals';

import { FormErrorComponent } from './form-error.component';
import { IdentityForm } from './identity-form.component';
import { InputComponent } from './input.component';
import { MultiselectComponent } from './multiselect.component';
import { RegistrationService } from './registration.service';
// import either ng, zod or valibot schema
import { formSchema, RegisterFormData } from './schema/ng';

// import { RegisterFormData, formSchema } from './schema/zod';
// import { RegisterFormData, formSchema } from './schema/valibot';

const initialState: RegisterFormData = {
  username: '',
  identity: {
    gender: '',
    salutation: '',
    pronoun: '',
  },
  age: 18, // TODO: when input changes it will be a string again :/
  birthday: new Date(), // TODO: it will be a string (format: yyyy-mm-dd) when input changes
  password: { pw1: '', pw2: '' },
  email: [''],
  newsletter: false,
  newsletterTopics: ['Angular'],
  agreeToTermsAndConditions: false,
};

@Component({
  selector: 'app-root',
  imports: [
    Control,
    JsonPipe,
    FormErrorComponent,
    MultiselectComponent,
    InputComponent,
    IdentityForm,
  ],
  template: `<main>
    <article>
      <h1>Angular Signal Forms Demo</h1>
      <p>
        This application demos the usage of Angulars new signal-based forms.
        All features are in state <strong>experimental</strong>.
      </p>
      <p>
        <mark>Note:</mark> User "hanswurst" already exists. Use this user to simulate async validation error.
      </p>
    </article>
    <form (submit)="submit($event)">

      <!-- just an experiment: a generic input for the uncommented template below -->
      <app-input label="Username" [control]="f.username" />
      <!--
      <label>Username
        <input
          type="text"
          [control]="f.username"
          [attr.aria-invalid]="ariaInvalidState(f.username())">
        @if(f.username().touched() && f.username().errors().length) {
        <app-form-error [errors]="f.username().errors()" />
        }
      </label>
      -->

      <identity-form [identity]="f.identity" />

      <div class="group-with-gap">
        <label>Age
          <input
            type="number"
            [control]="f.age"
            [attr.aria-invalid]="ariaInvalidState(f.age())">
          @if(f.age().touched() && f.age().errors().length) {
          <app-form-error [errors]="f.age().errors()" />
          }
        </label>
        <label>Birthday
          <input
            type="date"
            [control]="f.birthday">
        </label>
      </div>

      <div class="group-with-gap">
        <label>Password
          <input
            type="password"
            autocomplete
            [control]="f.password.pw1"
            [attr.aria-invalid]="ariaInvalidState(f.password.pw1())">
          @if(f.password.pw1().touched() && f.password.pw1().errors().length) {
          <app-form-error [errors]="f.password.pw1().errors()" />
          }
        </label>
        <label>Password Confirmation
          <input
            type="password"
            autocomplete
            [control]="f.password.pw2"
            [attr.aria-invalid]="ariaInvalidState(f.password.pw2())">
          @if(f.password.pw2().touched() && f.password.pw2().errors().length) {
          <app-form-error [errors]="f.password.pw2().errors()" />
          }
        </label>
        @if(f.password().touched() && f.password().errors().length) {
        <app-form-error [errors]="f.password().errors()" />
        }
      </div>
      <fieldset>
        <legend>E-Mail Addresses</legend>
        <div class="group-with-gap">
          @for (emailField of f.email; track $index) {
            <div>
              <div role="group">
                <input
                  type="email"
                  [control]="emailField"
                  [attr.aria-label]="'E-Mail ' + $index"
                  [attr.aria-invalid]="ariaInvalidState(emailField())">
                <button type="button" (click)="removeEmail($index)">
                  -
                </button>
              </div>
              @if(emailField().touched() && emailField().errors().length) {
              <app-form-error [errors]="emailField().errors()" />
              }
            </div>
          }
        </div>
        @if(!f.email[0] || f.email[0]().touched() && f.email().errors().length) {
        <app-form-error [errors]="f.email().errors()" />
        }
        <button type="button" (click)="addEmail($event)">+</button>
      </fieldset>
      <label>Subscribe to Newsletter?
        <input
          type="checkbox"
          [control]="f.newsletter">
      </label>
      <app-multiselect [control]="f.newsletterTopics" label="Topics (multiple possible):" />
      @if(f.newsletterTopics().touched() && f.newsletterTopics().errors().length) {
      <app-form-error [errors]="f.newsletterTopics().errors()" />
      }
      <label>I agree to the terms and conditions
        <input
          type="checkbox"
          [attr.aria-invalid]="ariaInvalidState(f.agreeToTermsAndConditions())"
          [control]="f.agreeToTermsAndConditions">
      </label>
      @if(f.agreeToTermsAndConditions().touched() && f.agreeToTermsAndConditions().errors().length) {
      <app-form-error [errors]="f.agreeToTermsAndConditions().errors()" />
      }
      <hr />
      <app-form-error [errors]="f().errors()" />
      <div role="group" class="group-with-gap">
        <button
          type="submit"
          [disabled]="f().submitting()"
          [ariaBusy]="f().submitting()"
          >
          Register
        </button>
        <button
          type="reset"
          (click)="reset()">
          Reset
        </button>
      </div>
    </form>

    <article>
      <div role="group" class="group-with-gap">
        <div>
          <h2>Form States</h2>
          <ul>
            <li>Touched: {{ f().touched() }} </li>
            <li>Valid: {{ f().valid() }} </li>
            <li>Invalid: {{ f().invalid() }} </li>
            <li>Dirty: {{ f().dirty() }} </li>
            <li>Disabled: {{ f().disabled() }} </li>
            <li>Pending: {{ f().pending() }}</li>
            <li>Submitting: {{ f().submitting() }}</li>
          </ul>
        </div>
        <div>
          <h3>Data Model</h3>
          <pre>{{ registrationModel() | json }}</pre>
        </div>
      </div>
    </article>
  </main>`,
})
export class App {
  private readonly registrationService = inject(RegistrationService);
  protected readonly registrationModel = signal<RegisterFormData>(initialState);

  protected readonly f = form(this.registrationModel, formSchema);

  protected ariaInvalidState(
    field: FieldState<string | boolean | number>
  ): boolean | undefined {
    const errors = field.errors();
    if (!field.touched()) {
      return undefined;
    } else {
      return errors.length > 0 && field.touched();
    }
  }

  protected addEmail(e: Event): boolean {
    this.f.email().value.update((items) => [...items, '']);
    e.preventDefault();
    return false;
  }

  protected removeEmail(removeIndex: number): void {
    this.f
      .email()
      .value.update((items) =>
        items.filter((_, index) => index !== removeIndex)
      );
  }

  protected async submit(e: Event) {
    e.preventDefault();

    await submit(this.f, async (form) => {
      const errors: (WithField<CustomValidationError | ValidationError>)[] = [];

      try {
        await this.registrationService.registerUser(form().value());
      } catch (e) {
        errors.push(customError({
          field: form,
          error: {
            kind: 'serverError',
            message:
              'There was an server error, please try again (should work after 3rd try)',
          },
        }));
      }

      setTimeout(() => this.reset(), 3000);
      return errors;
    });
  }

  protected reset() {
    this.registrationModel.set(initialState);
    this.f().reset();
  }
}
