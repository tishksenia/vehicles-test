import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useCallback,
    useEffect,
} from 'react';
import { CrossIcon } from '../icons';

import styles from './modal.module.scss';

interface Props {
    open?: boolean;
    setOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

export const Modal: FC<PropsWithChildren<Props>> = ({
    open,
    setOpen,
    children,
}) => {
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        },
        [setOpen]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const modalClassName = [
        styles['modal'],
        !open ? styles['modal--closed'] : '',
    ].join(' ');

    return (
        <>
            <div className={modalClassName}>
                <button
                    className={styles['close-button']}
                    onClick={() => setOpen(false)}>
                    <CrossIcon color="black" />
                </button>
                {children}
            </div>
            <div
                className={styles['overlay']}
                onClick={() => setOpen(false)}></div>
        </>
    );
};
