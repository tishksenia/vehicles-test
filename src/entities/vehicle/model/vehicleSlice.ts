import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from './types';

const initialState: Vehicle[] = [
    {
        id: 'v1',
        name: 'AB23',
        driver: 'SpongeBob SquarePants',
        status: 'active',
        fuelType: 'LNG',
        equipments: [1, 2],
    },
];

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

export default vehicleSlice.reducer;
