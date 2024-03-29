import { RootState } from 'app/config/store';
import { createSelector } from 'reselect';

const selectVehicles = (state: RootState) => state.vehicles.vehicles;

const selectCurrentId = (state: RootState) => state.vehicles.currentId;

const selectVehicleById = createSelector(
    [selectVehicles, (_, id) => id],
    (vehicles, id) => vehicles.find((item) => item.id === id)
);

export { selectVehicleById, selectVehicles, selectCurrentId };
