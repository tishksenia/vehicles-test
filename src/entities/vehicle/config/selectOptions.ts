import { Option } from 'shared/api';
import { FuelType, VehicleStatus } from '../model/types';

const fuelTypeOptions: Option<FuelType>[] = [
    {
        value: 'CNG',
        text: 'Compressed Natural Gas',
    },
    {
        value: 'Diesel',
        text: 'Diesel',
    },
    {
        value: 'Electrical',
        text: 'Electrical',
    },
    {
        value: 'LNG',
        text: 'Liquefied Natural Gas',
    },
];

const statusOptions: Option<VehicleStatus>[] = [
    {
        text: 'Active',
        value: 'active',
    },
    {
        text: 'Inactive',
        value: 'inactive',
    },
];

export { fuelTypeOptions, statusOptions };
