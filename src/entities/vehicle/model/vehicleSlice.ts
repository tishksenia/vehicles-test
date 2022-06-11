import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from './types';

const initialState: Vehicle[] = [];

const vehicleSlice = createSlice({
    initialState,
    name: 'vehicles',
    reducers: {
        addVehicle: (state, action: PayloadAction<Vehicle>) => {
            // assuming that vehicle's ID is important
            // and comes from user input instead of being generated
            return [...state, action.payload];
        },
        addMultipleVehicles: (state, action: PayloadAction<Vehicle[]>) => {
            return [...state, ...action.payload];
        },
        removeVehicle: (state, action: PayloadAction<{ id: string }>) => {
            return state.filter((vehicle) => action.payload.id !== vehicle.id);
        },
    },
});

export const { addMultipleVehicles, addVehicle, removeVehicle } =
    vehicleSlice.actions;
export default vehicleSlice.reducer;