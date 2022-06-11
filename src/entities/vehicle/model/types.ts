type FuelType = 'LNG' | 'Diesel' | 'CNG' | 'Electrical';

interface Vehicle {
    id: string;
    name: string;
    driver: string;
    fuelType: FuelType;
    status: 'active' | 'inactive';
    equipments: number[];
}

export type { FuelType, Vehicle };
