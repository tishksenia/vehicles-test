import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from 'app/config/store';

const AllProviders: FC<PropsWithChildren<{}>> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

export { AllProviders };

const customRender = (ui: React.ReactElement, options?: any) =>
    render(ui, { wrapper: AllProviders, ...options });

const setupUserEvent = (
    jsx: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) => {
    return {
        user: userEvent.setup(),
        ...customRender(jsx),
    };
};
// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, setupUserEvent };
