import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { Modal } from 'shared';

interface Props {
    modalState: {
        open?: boolean;
        setOpen: Dispatch<SetStateAction<boolean | undefined>>;
    };
}

export const VehicleFormModal: FC<PropsWithChildren<Props>> = ({
    modalState,
    children,
}) => {
    return <Modal {...modalState}>{children}</Modal>;
};
