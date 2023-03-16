import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  
  nombreLower: string = 'yaqi';
  nombreUpper: string = 'YAQI';
  nombreCompleto: string = 'yAqI yE';

  fecha: Date = new Date();
}
