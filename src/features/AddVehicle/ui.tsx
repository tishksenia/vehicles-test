import { toast } from 'react-toastify';

import { useAppDispatch } from 'app/config/hooks';
import { addVehicle, Vehicle, VehicleForm } from 'entities/vehicle';
import { Button } from 'shared';

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
                uiOptions={{
                    formTitle: 'Add Vehicle',
                    trigger: <Button>Add Vehicle</Button>,
                }}
            />
        </>
    );
};
