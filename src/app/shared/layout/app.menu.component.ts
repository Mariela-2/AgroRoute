import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'General',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-th-large',
            routerLink: ['/app/dashboard'],
          },

          {
            label: 'Packages',
            icon: 'pi pi-box',
            routerLink: ['/app/packages'],
          },
          {
            label: 'Shipments',
            icon: 'pi pi-truck',
            routerLink: ['/app/shipments'],
          },
          {
          label: 'sensors',
          icon: 'pi pi-sliders-h', // Cambiado a un icono acorde a sensor
          routerLink: ['/app/sensors'],
        },
        ],
      },
      {
        label: 'Company',
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-building',
            routerLink: ['/app/profile'],
          },
          {
            label: 'Employees',
            icon: 'pi pi-users',
            routerLink: ['/app/employees'],
          },
          {
            label: 'Clients',
            icon: 'pi pi-users',
            routerLink: ['/app/clients'],
          },
        ],
      },
    ];
  }
}
