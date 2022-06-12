import { toast } from 'react-toastify';

import { useAppDispatch } from 'app/config/hooks';
import { addVehicle, Vehicle, VehicleForm } from 'entities/vehicle';

export const AddVehicle = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (vehicle: Omit<Vehicle, 'id'>) => {
        dispatch(addVehicle(vehicle));
        toast('Vehicle was added', { type: 'success' });
    };

    return (
        <>
            <VehicleForm
                onSubmit={handleSubmit}
                texts={{
                    formTitle: 'Add Vehicle',
                    actionButtonContent: 'Add Vehicle',
                }}
            />
        </>
    );
};
