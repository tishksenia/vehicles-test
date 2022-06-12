import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { parseId } from 'entities/vehicle';
import { FormValues } from './formValues';
import { Vehicle } from './types';

interface State {
    vehicles: Vehicle[];
    currentId: number;
}

const initialState: State = {
    vehicles: [],
    // stored max id, used to form id when adding new vehicle
    currentId: 0,
};

const vehicleSlice = createSlice({
    initialState,
    name: 'vehicles',
    reducers: {
        addVehicle: (state, action: PayloadAction<FormValues>) => {
            // can mutate state because redux toolkit uses Immer in it's reducers
            state.currentId++;
            state.vehicles.push({
                ...action.payload,
                id: `v${state.currentId}`,
            });
        },
        updateVehicle: (
            state,
            action: PayloadAction<FormValues & { id: string }>
        ) => {
            state.vehicles = state.vehicles.map((vehicle) => {
                if (vehicle.id === action.payload.id) {
                    return action.payload;
                }
                return vehicle;
            });
        },
        addMultipleVehicles: (state, action: PayloadAction<Vehicle[]>) => {
            // TODO: check for duplicate IDs
            state.vehicles = [...state.vehicles, ...action.payload];
            // find maximum ID out of new vehicles array
            state.currentId = action.payload.reduce(
                (oldId, { id }) => Math.max(oldId, parseId(id)),
                state.currentId
            );
        },
        removeVehicle: (state, action: PayloadAction<{ id: string }>) => {
            state.vehicles = state.vehicles.filter(
                (vehicle) => action.payload.id !== vehicle.id
            );
        },
    },
});

export const { addMultipleVehicles, addVehicle, removeVehicle, updateVehicle } =
    vehicleSlice.actions;
export default vehicleSlice.reducer;
