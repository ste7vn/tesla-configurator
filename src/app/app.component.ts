import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CommonModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
