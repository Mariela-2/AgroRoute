export interface Sensor {
  id: string;
  type: string;
  value: number;
  humidity: number;
  status: string;
  destinationAddress: string;
  packageCode: string;
  owner: {
    firstName: string;
    lastName: string;
  };
}
