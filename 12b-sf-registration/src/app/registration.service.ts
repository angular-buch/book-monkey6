import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private submitErrorCnt = 0;

  registerUser(registrationData: Record<string, any>) {
    this.submitErrorCnt++;
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        if (this.submitErrorCnt < 3) {
          reject();
        } else {
          resolve(registrationData);
        }
      }, 2000);
    });
  }

  checkUserExists(username: string) {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(username === 'hanswurst');
      }, 500);
    });
  }
}
