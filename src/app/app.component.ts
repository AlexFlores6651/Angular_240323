import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datos: personas[] = [
    { id: 1, nombre: 'Alejandro', apellido: 'Flores', sexo: 'Masculino' },
    { id: 2, nombre: 'Fernanda', apellido: 'Diaz', sexo: 'Femenino' },
    { id: 3, nombre: 'Iris', apellido: 'Gloria', sexo: 'Femenino' },
    { id: 4, nombre: 'Manuel', apellido: 'Ramirez', sexo: 'Masculino' },
    { id: 5, nombre: 'Luis', apellido: 'Sanchez', sexo: 'Masculino' }
  ];
} //fin clase

interface personas {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
}
