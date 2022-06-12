import { FormValues } from '../model/formValues';
import { FuelType, VehicleStatus } from '../model/types';

export const formDefaultValues: FormValues = {
    name: '',
    driver: '',
    fuelType: '' as FuelType,
    status: '' as VehicleStatus,
    equipments: [],
};
