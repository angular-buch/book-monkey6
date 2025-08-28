import { apply, pattern, schema } from '@angular/forms/signals';
import { applyEach, applyWhen, customError, disabled, email, maxLength, min, minLength, required, validate, validateAsync, validateTree } from '@angular/forms/signals';

import { GenderIdentity, identitySchema } from '../identity-form.component';
import { confirmationPasswordValidator, vaidateUsername as validateUsername } from '../validators';

export interface RegisterFormData {
  username: string;
  identity: GenderIdentity;
  age: number;
  birthday: Date;
  password: { pw1: string; pw2: string };
  email: string[];
  newsletter: boolean;
  newsletterTopics: string[];
  agreeToTermsAndConditions: boolean;
}

export const formSchema = schema<RegisterFormData>((fieldPath) => {
  // username is required and must be between 3 and 12 characters long
  required(fieldPath.username, { message: 'Username is required'});
  minLength(fieldPath.username, 3, { message: 'A username must be at least 3 characters long'});
  maxLength(fieldPath.username, 12, { message: 'A username can be max. 12 characters long'});
  validateAsync(fieldPath.username, validateUsername);

  apply(fieldPath.identity, identitySchema);

  min(fieldPath.age, 18, { message: 'You must be >=18 years old'});

  // at least one email and each email must match format
  validate(fieldPath.email, ({ value }) =>
    !value().some((e) => e)
      ? customError({
          kind: 'atLeastOneEmail',
          message: 'At least one E-Mail address must be added',
        })
      : undefined
  );
  applyEach(fieldPath.email, (emailPath) => {
    email(emailPath, { message: 'E-Mail format is invalid'});
  });

  // passwords are required and must match
  required(fieldPath.password.pw1, { message: 'A password is required' });
  required(fieldPath.password.pw2, { message: 'A password confirmation is required'});
  minLength(fieldPath.password.pw1, 8, { message: 'A password must be at least 8 characters long'});
  pattern(
    fieldPath.password.pw1,
    new RegExp('^.*[!@#$%^&*(),.?":{}|<>\\[\\]\\\\/~`_+=;\'\\-].*$'),
    { message: 'The passwort must contain at least one special character'}
  );
  validateTree(
    fieldPath.password,
    confirmationPasswordValidator(fieldPath.password)
  );

  // error(
  //   fieldPath.agreeToTermsAndConditions,
  //   ({ value }) => !value(),
  //   'You must agree to the terms and conditions'
  // );

  applyWhen(
    fieldPath,
    ({ value }) => value().newsletter,
    (fieldPathWhenTrue) => {
      validate(fieldPathWhenTrue.newsletterTopics, ({ value }) =>
        !value().length
          ? customError({
              kind: 'noTopicSelected',
              message: 'Select at least one newsletter topic',
            })
          : undefined
      );
    }
  );

  disabled(
    fieldPath.newsletterTopics,
    ({ valueOf }) => !valueOf(fieldPath.newsletter)
  );
});
