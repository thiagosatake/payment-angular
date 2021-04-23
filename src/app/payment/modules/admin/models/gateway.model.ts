import { GatewayParameter } from './gateway-parameter.model';

export interface Gateway {
  uuid?: string;
  name: string;
  description: string;
  configurations?: GatewayParameter[];
}
