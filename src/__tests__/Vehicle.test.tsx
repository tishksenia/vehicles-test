import { VehicleListPage } from 'pages/VehicleListPage';
import { screen, setupUserEvent, render } from './utils/test-utils';

describe('Vehicle', () => {
    describe('Add vehicle', () => {
        let { user } = setupUserEvent(<VehicleListPage />);

        beforeEach(async () => {
            const button = screen.getAllByRole('button', {
                name: 'Add Vehicle',
            })[0];
            await user.click(button);
        });

        test('After user fills the form, it shows in the vehicle list', async () => {
            // Arrange
            const nameInput = screen.getByRole('textbox', { name: 'Name' });
            const driverInput = screen.getByRole('textbox', { name: 'Driver' });
            const fuelSelect = screen.getByRole('combobox', {
                name: 'Fuel Type',
            });
            const statusSelect = screen.getByRole('combobox', {
                name: 'Status',
            });

            const submitButton = screen.getByRole('button', { name: 'Submit' });

            // Act
            await user.type(nameInput, 'Vehicle title');
            await user.type(driverInput, 'Some Driver Name');
            await user.selectOptions(fuelSelect, 'CNG');
            await user.selectOptions(statusSelect, 'active');
            await user.click(submitButton);

            // Assert
            expect(screen.getByText('Some Driver Name')).toBeTruthy();
            expect(screen.getByText('v1')).toBeTruthy();
        });
    });
});
