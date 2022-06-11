import { VehicleListPage } from 'pages/VehicleListPage';
import { PageContainer } from 'widgets';
import { StoreProvider } from './providers/StoreProvider';

import './styles/index.scss';

function App() {
    return (
        <StoreProvider>
            <PageContainer>
                <VehicleListPage />
            </PageContainer>
        </StoreProvider>
    );
}

export default App;
