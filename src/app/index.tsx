import { VehicleListPage } from 'pages/VehicleListPage';
import { PageContainer } from 'widgets';
import { StoreProvider } from './providers/StoreProvider';
import { ToastifyProvider } from './providers/ToastifyProvider';

import './styles/index.scss';

function App() {
    return (
        <StoreProvider>
            <ToastifyProvider>
                <PageContainer>
                    <VehicleListPage />
                </PageContainer>
            </ToastifyProvider>
        </StoreProvider>
    );
}

export default App;
