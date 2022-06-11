import { FC, useState } from 'react';

import { Button, TrashIcon, getCSSVariableValue } from 'shared';
import { ConfirmationModal } from './ConfirmationModal';

interface Props {
    id: string;
}

export const RemoveVehicle: FC<Props> = ({ id }) => {
    const [open, setOpen] = useState<boolean>();

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <>
            <ConfirmationModal modalState={{ open, setOpen }} id={id} />
            <Button outlined onClick={handleClick}>
                <TrashIcon color={getCSSVariableValue('--accent-color')} />
            </Button>
        </>
    );
};
