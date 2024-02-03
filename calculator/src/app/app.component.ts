import { Component } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor() { }
}
