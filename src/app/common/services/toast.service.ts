import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _snackBar: MatSnackBar) {}

  message(message: string, action = '', duration = 3000) {
    this._snackBar.open(message, action, {
      duration,
    });
  }
}
