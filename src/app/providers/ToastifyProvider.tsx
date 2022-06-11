import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastifyProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <ToastContainer theme="colored" />
            {children}
        </>
    );
};
