import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
