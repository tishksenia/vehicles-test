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
    attachEquipment,
    removeEquipment,
} from './vehicleSlice';
export type { FuelType, Vehicle, VehicleStatus } from './types';
export type { FormValues } from './formValues';
export { vehicleReducer };
