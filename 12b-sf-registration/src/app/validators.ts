import { inject, resource, Signal } from '@angular/core';
import { AsyncValidatorOptions, customError, FieldPath, TreeValidator } from '@angular/forms/signals';

import { RegistrationService } from './registration.service';

export function confirmationPasswordValidator(
  path: FieldPath<{ pw1: string; pw2: string }>
): TreeValidator<{ pw1: string; pw2: string }> {
  return ({ valueOf, fieldOf }) => {
    if (valueOf(path.pw2) === valueOf(path.pw1)) {
      return customError({
        field: fieldOf(path.pw2),
        kind: 'confirmationPassword',
        message:
          'The entered password must match with the one specified in "Password" field',
      });
    }
  };
}

export const vaidateUsername: AsyncValidatorOptions<string, string, boolean> = {
  // Reactive params
  params: ({ value }) => value(),
  // Factory creating a resource
  factory: (username: Signal<string | undefined>) => {
    const registrationService = inject(RegistrationService);
    return resource({
      params: username,
      loader: ({ params }) => {
        return registrationService.checkUserExists(params);
      },
    });
  },
  // Maps resource to error
  errors: (result) => {
    if (result) {
      return customError({
        kind: 'userExists',
        message: 'The username you entered was already taken',
      });
    }
  },
};
