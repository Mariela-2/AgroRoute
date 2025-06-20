import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { Package } from '../../../packages/models/package';
import { ShipmentService } from '../../services/shipment.service';
import { Shipment } from '../../models/shipment';
import { TableModule } from 'primeng/table';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { CommonModule, DecimalPipe } from '@angular/common';
import { EMPTY, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-view-tracking-packages',
  standalone: true,
  imports: [TableModule, DateFormatPipe, DecimalPipe, CommonModule],
  templateUrl: './view-tracking-packages.component.html',
  styleUrls: ['./view-tracking-packages.component.css'],
})
export class ViewTrackingPackagesComponent
  implements OnChanges, AfterViewInit, OnDestroy
{
  private _shipmentService = inject(ShipmentService);
  private _changeDetector = inject(ChangeDetectorRef);

  @Input() shipment?: Shipment;

  packages = signal<Package[]>([]);

  // Mock alertas fijas
  private alertasMock = [
    {
      code: 'A1B2C',
      breakCondition: true,
      temperature: 8.50,
      humidity: 85.00,
    },
    {
      code: 'Z9Y8X',
      breakCondition: false,
      temperature: 4.25,
      humidity: 55.50,
    },
    {
      code: 'K3L4M',
      breakCondition: true,
      temperature: 9.75,
      humidity: 92.30,
    },
    {
      code: 'A1B2C',
      breakCondition: false,
      temperature: 2.00,
      humidity: 40.00,
    }
  ];

  private alertIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['shipment'] && this.shipment?.id) {
      this._shipmentService
        .getPackages(this.shipment.id)
        .subscribe((data) => this.packages.set(data));
    }
  }

  ngAfterViewInit(): void {
    // Simular recepción de alertas mock cada 3 segundos
    timer(0, 3000).subscribe(() => {
      if (this.alertIndex < this.alertasMock.length) {
        const alerta = this.alertasMock[this.alertIndex];
        this.updatePackageData(alerta);
        this.alertIndex++;
      }
    });
  }

  private updatePackageData(update: {
    code: string;
    breakCondition: boolean;
    humidity: number;
    temperature: number;
  }) {
    const currentPackages = this.packages();
    const updatedPackages = currentPackages.map((pkg) => {
      if (pkg.code === update.code) {
        return {
          ...pkg,
          breakCondition: update.breakCondition,
          humidity: update.humidity,
          temperature: update.temperature,
        };
      }
      return pkg;
    });
    this.packages.set(updatedPackages);
    this._changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    // No hay sockets, no hay nada que limpiar
  }
}
