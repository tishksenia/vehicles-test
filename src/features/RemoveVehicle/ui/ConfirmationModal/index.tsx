import { Dispatch, FC, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch } from 'app/config/hooks';
import { Modal, Button } from 'shared';
import { removeVehicle } from 'entities/vehicle';

import styles from './confirmation-modal.module.scss';

interface Props {
    id: string;
    modalState: {
        open?: boolean;
        setOpen: Dispatch<SetStateAction<boolean | undefined>>;
    };
}

export const ConfirmationModal: FC<Props> = ({
    modalState: { open, setOpen },
    id,
}) => {
    const dispatch = useAppDispatch();

    const confirm = () => {
        dispatch(removeVehicle({ id }));
        toast(`Vehicle with id ${id} was removed`, { type: 'success' });
    };

    const cancel = () => {
        setOpen(false);
    };

    return (
        <Modal open={open} setOpen={setOpen}>
            <h2 className={styles.title}>Delete vehicle</h2>
            <p>
                Do you want to remove vehicle with id{' '}
                <span className={styles.id}>{id}</span>?
            </p>
            <div className={styles.actions}>
                <Button onClick={confirm}>Confirm</Button>
                <Button outlined onClick={cancel}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};
