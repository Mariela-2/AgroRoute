import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent {
  // component logic here

  sensors = [
    {
      id: 'P0Q2R',
      type: 'Sensor de Temperatura',
      status: 'EN LINEA'
    },
    {
      id: 'P0Q2R',
      type: 'Sensor de Humedad',
      status: 'APAGADO'
    }
  ];

  getStatusClass(status: string): string {
    return status === 'EN LINEA' ? 'online' : 'offline';
  }
}

@NgModule({
  declarations: [SensorsComponent],
  imports: [CommonModule],
  exports: [SensorsComponent]
})
export class SensorsModule { }
