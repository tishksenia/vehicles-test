import { FC } from 'react';

import { useAppDispatch } from 'app/config/hooks';
import { removeVehicle } from 'entities/vehicle';
import { Button, TrashIcon, getCSSVariableValue } from 'shared';

interface Props {
    id: string;
}

export const RemoveVehicle: FC<Props> = ({ id }) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(removeVehicle({ id }));
    };

    return (
        <Button outlined onClick={handleClick}>
            <TrashIcon color={getCSSVariableValue('--accent-color')} />
        </Button>
    );
};
