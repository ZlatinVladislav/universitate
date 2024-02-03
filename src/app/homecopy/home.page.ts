import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonInput, IonCol, IonRow, IonLabel, IonCheckbox, IonList, IonItem } from '@ionic/angular/standalone';
import { TodoService } from './todoservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonInput, IonCol, IonRow, FormsModule, IonLabel, IonCheckbox, IonList, IonItem, CommonModule],
})
export class HomePage1 {
  display = '0';
  firstval: number = null;
  operator: any = null;
  newcursor = false;
  isc = false;
  iscomma = false;
  colorChangeCheckbox: boolean = false;
  newTask = '';


  constructor(public todoService: TodoService) { }
  changeColor() {
    document.documentElement.style.setProperty('--ion-color-primary', 'red')
  }

  addTodo(): void {
    if (this.newTask.trim()) {
      this.todoService.addTodo(this.newTask.trim());

      this.newTask = '';
    }
  }
}
