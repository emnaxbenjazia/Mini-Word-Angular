import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  standalone: false,
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  textColor: string = ''; // For the text color
  fontSize: number = 16; // Default font size
  fontFamily: string = 'Arial'; // Default font family
}
