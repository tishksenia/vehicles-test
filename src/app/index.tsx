import { VehicleListPage } from 'pages/VehicleListPage';
import { StoreProvider } from './providers/StoreProvider';

import './styles/index.scss';

function App() {
    return (
        <StoreProvider>
            <VehicleListPage />
        </StoreProvider>
    );
}

export default App;
