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
        <div>
            <ConfirmationModal modalState={{ open, setOpen }} id={id} />
            <Button onClick={handleClick} outlined aria-label="Remove Vehicle">
                <TrashIcon color={getCSSVariableValue('--accent-color')} />
            </Button>
        </div>
    );
};
