import { FC, ReactNode, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from 'shared';
import { FormContainer } from 'widgets';
import { Vehicle } from 'entities/vehicle';
import { formDefaultValues, formSchema } from 'entities/vehicle/config';
import { FormValues } from 'entities/vehicle/model';

import { VehicleFormFields } from '../VehicleFormFields';
import { VehicleFormModal } from '../VehicleFormModal';

interface Props {
    defaultValues?: Omit<Vehicle, 'id'>;
    onSubmit: SubmitHandler<FormValues>;
    uiOptions: {
        formTitle: ReactNode;
        trigger: ReactNode;
    };
}

export const VehicleForm: FC<Props> = ({
    defaultValues = formDefaultValues,
    onSubmit,
    uiOptions: { trigger, formTitle },
}) => {
    const [open, setOpen] = useState<boolean>();
    const formInstance = useForm({
        defaultValues,
        resolver: yupResolver(formSchema),
    });
    const { handleSubmit, reset } = formInstance;

    const submit = (values: FormValues) => {
        onSubmit(values);
        setOpen(false);
        reset(defaultValues);
    };

    useEffect(() => {
        // update form after closing
        !open && reset(defaultValues);
    }, [open, defaultValues, reset]);

    return (
        <>
            <VehicleFormModal modalState={{ open, setOpen }}>
                <FormContainer
                    actions={<Button>Submit</Button>}
                    onSubmit={handleSubmit(submit)}>
                    <h1>{formTitle}</h1>
                    <VehicleFormFields formInstance={formInstance} />
                    {/* TODO: equipments */}
                </FormContainer>
            </VehicleFormModal>
            <span role="button" onClick={() => setOpen(true)}>
                {trigger}
            </span>
        </>
    );
};
