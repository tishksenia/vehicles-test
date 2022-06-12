import vehicleReducer from './vehicleSlice';

export {
    selectCurrentId,
    selectVehicleById,
    selectVehicles,
} from './selectors';
export {
    addMultipleVehicles,
    addVehicle,
    removeVehicle,
    updateVehicle,
} from './vehicleSlice';
export type { FuelType, Vehicle, VehicleStatus } from './types';
export type { FormValues } from './formValues';
export { vehicleReducer };

export { VehicleFormContext } from './vehicleFormContext';
