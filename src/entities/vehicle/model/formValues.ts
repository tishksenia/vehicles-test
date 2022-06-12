import { Vehicle } from './types';

export type FormValues = Omit<Vehicle, 'id'>;
