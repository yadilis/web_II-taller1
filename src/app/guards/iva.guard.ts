import { CanActivateFn } from '@angular/router';

export const ivaGuard: CanActivateFn = (route, state) => {
  return true;
};
