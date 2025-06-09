import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Modelos
import { Shipment } from '../../models/shipment';
import { Package } from '../../../packages/models/package';

// Servicios
import { ShipmentService } from '../../services/shipment.service';

// PrimeNG
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview'; // ✅ TABVIEW REAL

// Pipes
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-view-shipment',
  standalone: true,
  templateUrl: './view-shipment.component.html',
  styleUrl: './view-shipment.component.css',
  imports: [
    CommonModule,
    TableModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    DateFormatPipe,
    TabViewModule, // ✅ PrimeNG TabView
  ],
})
export class ViewShipmentComponent implements OnChanges {
  @Input() shipment?: Shipment;

  packages?: Package[];

  private _shipmentService = inject(ShipmentService);

  ngOnChanges(changes: SimpleChanges): void {
    const id = this.shipment?.id;
    if (!id) return;

    this._shipmentService.getPackages(id).subscribe((data) => {
      this.packages = data;
    });
  }

  onInitShipment(): void {
    const id = this.shipment?.id;
    if (!id) return;

    this._shipmentService.startShipment(id).subscribe({
      next: (data) => {
        console.log('Shipment started:', data);
      },
      error: (err) => {
        console.error('Error starting shipment:', err);
      },
      complete: () => {
        console.log('Shipment initiation complete.');
      },
    });
  }
}
