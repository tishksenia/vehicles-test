import { FC } from 'react';
import { useAppSelector } from 'app/config/hooks';
import { selectEquipmentById } from 'entities/equipment';

interface Props {
    id: number;
}

export const EquipmentCard: FC<Props> = ({ id }) => {
    const equipment = useAppSelector((state) => selectEquipmentById(state, id));

    // assumption: if there is no vehicle with such id in store, I should let user know
    return (
        <div>
            {equipment?.name}
            {!equipment && (
                <>
                    Unknown (<b>id:</b> {id})
                </>
            )}
        </div>
    );
};
