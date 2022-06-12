import { createContext } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormValues } from './formValues';

export const VehicleFormContext = createContext<
    UseFormReturn<FormValues> | undefined
>(undefined);
