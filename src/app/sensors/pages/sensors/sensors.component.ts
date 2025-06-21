import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package } from '../../../packages/models/package';


@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent {
  // component logic here

 sensorsTemperature = [
  {
    id: "1",
    shipmentCode: "SHIP123",
    breakCondition: false,
    code: "A1B2C",
    temperature: 2.00,
    destinationAddress: "Av Nicolás Arriola 906, La Victoria 15034",
    createdAt: "2025-06-20T01:16:00.000Z",
    status: "ENCENDIDO",
    owner: {
      id: "1",
      firstName: "Balceda Calixto Jenny",
      lastName: "Aremy",
      dni: "12345678",
      email: "jennybalcedacalixto01@gmail.com",
      phoneNumber: "(+51) 945845612"
    }
  },
  {
    id: "2",
    shipmentCode: "SHIP123",
    breakCondition: false,
    code: "Z9Y8X",
    temperature: 4.25,
    destinationAddress: "Avenida Javier Prado Este 1109, La Victoria 15034",
    createdAt: "2025-06-20T01:16:00.000Z",
    status: "ENCENDIDO",
    owner: {
      id: "1",
      firstName: "Balceda Calixto Jenny",
      lastName: "Aremy",
      dni: "12345678",
      email: "jennybalcedacalixto01@gmail.com",
      phoneNumber: "(+51) 945845612"
    }
  },
  {
    id: "3",
    shipmentCode: "SHIP123",
    breakCondition: true,
    code: "K3L4M",
    temperature: 9.75,
    destinationAddress: "Av. P.º de la República 3530, San Isidro 15046",
    createdAt: "2025-06-20T01:16:00.000Z",
    status: "ENCENDIDO",
    owner: {
      id: "1",
      firstName: "Balceda Calixto Jenny",
      lastName: "Aremy",
      dni: "12345678",
      email: "jennybalcedacalixto01@gmail.com",
      phoneNumber: "(+51) 945845612"
    }
  }
];

sensorsHumidity = [
  {
    id: "1",
    shipmentCode: "SHIP123",
    breakCondition: false,
    code: "A1B2C",
    humidity: 40.00,
    destinationAddress: "Av Nicolás Arriola 906, La Victoria 15034",
    createdAt: "2025-06-20T01:16:00.000Z",
    status: "ENCENDIDO",
    owner: {
      id: "1",
      firstName: "Balceda Calixto Jenny",
      lastName: "Aremy",
      dni: "12345678",
      email: "jennybalcedacalixto01@gmail.com",
      phoneNumber: "(+51) 945845612"
    }
  },
  {
    id: "2",
    shipmentCode: "SHIP123",
    breakCondition: false,
    code: "Z9Y8X",
    humidity: 55.50,
    destinationAddress: "Avenida Javier Prado Este 1109, La Victoria 15034",
    createdAt: "2025-06-20T01:16:00.000Z",
    status: "ENCENDIDO",
    owner: {
      id: "1",
      firstName: "Balceda Calixto Jenny",
      lastName: "Aremy",
      dni: "12345678",
      email: "jennybalcedacalixto01@gmail.com",
      phoneNumber: "(+51) 945845612"
    }
  },
  {
    id: "3",
    shipmentCode: "SHIP123",
    breakCondition: true,
    code: "K3L4M",
    humidity: 92.30,
    destinationAddress: "Av. P.º de la República 3530, San Isidro 15046",
    createdAt: "2025-06-20T01:16:00.000Z",
    status: "ENCENDIDO",
    owner: {
      id: "1",
      firstName: "Balceda Calixto Jenny",
      lastName: "Aremy",
      dni: "12345678",
      email: "jennybalcedacalixto01@gmail.com",
      phoneNumber: "(+51) 945845612"
    }
  }
];

 toggleSensorStatus(sensor: any, targetStatus: string): void {
    sensor.status = targetStatus;
  }

package: any;


  getStatusClass(status: string): string {
    return status === 'EN LINEA' ? 'online' : 'offline';
  }


  encendido = false; // controla el botón general (para el ejemplo)

  setEncendido(): void {
    this.encendido = true;
  }

  setApagado(): void {
    this.encendido = false;
  }


}
@NgModule({
  declarations: [SensorsComponent],
  imports: [CommonModule],
  exports: [SensorsComponent]
})
export class SensorsModule { }
