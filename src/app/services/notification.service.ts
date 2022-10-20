import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar : MatSnackBar) { }


  showNotification(
    messageType: 'error' | 'success',
    displayMessage: string,
    buttonText: string
  ) {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
        type: messageType,
      },
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: messageType,
    });

  }
}
