export { VehiclesList } from './ui/VehiclesList';
export { VehicleForm } from './ui/VehicleForm';

export {
    addMultipleVehicles,
    addVehicle,
    removeVehicle,
    updateVehicle,
    selectCurrentId,
    selectVehicleById,
    vehicleReducer,
    selectVehicles,
    VehicleFormContext,
} from './model';
export type { Vehicle, VehicleStatus, FuelType } from './model';

export { parseId } from './lib';
