import { FC, useContext } from 'react';

import { Button, TrashIcon, getCSSVariableValue } from 'shared';
import { FormValues, VehicleFormContext } from 'entities/vehicle/model';
import { UseFormReturn, useWatch } from 'react-hook-form';

interface Props {
    id: number;
}

export const RemoveEquipment: FC<Props> = ({ id }) => {
    const { setValue, control } = useContext(
        VehicleFormContext
    ) as UseFormReturn<FormValues>;

    const equipments = useWatch({ control, name: 'equipments' });

    const remove = () => {
        setValue(
            'equipments',
            equipments?.filter((equipmentId) => id !== equipmentId)
        );
    };

    return (
        <Button icon outlined type="button" onClick={remove}>
            <TrashIcon color={getCSSVariableValue('--accent-color')} />
        </Button>
    );
};
