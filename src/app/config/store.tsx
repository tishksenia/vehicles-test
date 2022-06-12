import { configureStore } from '@reduxjs/toolkit';
import { equipmentReducer } from 'entities/equipment';
import { vehicleReducer } from 'entities/vehicle';

const store = configureStore({
    reducer: {
        vehicles: vehicleReducer,
        equipments: equipmentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
