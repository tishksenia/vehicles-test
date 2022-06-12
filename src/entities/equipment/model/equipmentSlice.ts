import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Equipment } from './Equipment';

const initialState: Equipment[] = [];

const equipmentSlice = createSlice({
    initialState,
    name: 'equipments',
    reducers: {
        addMultipleEquipments: (state, action: PayloadAction<Equipment[]>) => {
            return [...state, ...action.payload];
        },
    },
});

export const { addMultipleEquipments } = equipmentSlice.actions;

export default equipmentSlice.reducer;
