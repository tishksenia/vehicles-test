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
