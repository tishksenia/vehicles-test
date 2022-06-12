import { FC } from 'react';
import { Controller, UseFormReturn, useFormState } from 'react-hook-form';

import { Input, Select } from 'shared';
import { fuelTypeOptions, statusOptions } from '../../config/selectOptions';
import { useAppSelector } from 'app/config/hooks';
import { selectCurrentId } from 'entities/vehicle/model/selectors';
import { FormValues } from 'entities/vehicle/model';

interface Props {
    formInstance: UseFormReturn<FormValues>;
}

export const VehicleFormFields: FC<Props> = ({ formInstance }) => {
    const { control, register, getValues } = formInstance;
    const { errors } = useFormState({ control });

    const currentId = useAppSelector(selectCurrentId);

    const id = getValues('id');

    return (
        <>
            <Input label="ID" disabled value={id || `v${currentId + 1}`} />
            <Input
                label="Name"
                error={errors.name?.message}
                {...register('name')}
            />
            <Input
                label="Driver"
                error={errors.driver?.message}
                {...register('driver')}
            />
            <Controller
                render={({ field }) => (
                    <Select
                        label="Fuel Type"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        options={fuelTypeOptions}
                        error={errors.fuelType?.message}
                    />
                )}
                control={control}
                name="fuelType"
            />
            <Controller
                render={({ field }) => (
                    <Select
                        label="Status"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        options={statusOptions}
                        error={errors.status?.message}
                    />
                )}
                control={control}
                name="status"
            />
        </>
    );
};
