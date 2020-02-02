import { GeoLocation } from '../cameras.interface';
import { generateUUID } from '../../dashboard/dashboard.utils';

export default class Camera {
  id: string;
  selected = false;

  constructor(public name: string, public position: GeoLocation) {
    this.id = generateUUID();
  }
}
