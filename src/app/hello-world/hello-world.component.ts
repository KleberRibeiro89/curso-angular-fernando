import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {
  numero: number = 10;
  texto: string = 'texto 123';
  verdadeiroFalso: boolean = false;
}
