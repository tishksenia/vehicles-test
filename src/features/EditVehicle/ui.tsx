import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'app/config/hooks';
import {
    selectVehicleById,
    updateVehicle,
    Vehicle,
    VehicleForm,
} from 'entities/vehicle';
import { FC } from 'react';
import { Button } from 'shared';

interface Props {
    id: string;
}

export const EditVehicle: FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch();
    const defaultValues = useAppSelector((state) =>
        selectVehicleById(state, id)
    );

    const handleSubmit = (vehicle: Omit<Vehicle, 'id'>) => {
        toast('Vehicle was edited', { type: 'success' });
        dispatch(updateVehicle(vehicle as Vehicle));
    };

    return (
        <VehicleForm
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
            uiOptions={{
                formTitle: 'Edit Vehicle',
                trigger: <Button outlined>Edit</Button>,
            }}
        />
    );
};
