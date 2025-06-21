import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';
import { Sensor } from '../model/sensors';

@Injectable({
  providedIn: 'root',
})
export class SensorService extends BaseService<Sensor> {
  protected override _http = inject(HttpClient);
  protected override resourceEndpoint = '/sensors';

  /**
   * Obtiene sensores asociados a un envío
   * @param shipmentId Id del shipment
   */
  getSensorsByShipment(shipmentId: string): Observable<Sensor[]> {
    return this._http
      .get<Sensor[]>(`/shipments/${shipmentId}/sensors`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
