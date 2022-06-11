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
    },
});

export const { addMultipleVehicles, addVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
