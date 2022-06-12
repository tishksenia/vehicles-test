import { object, string } from 'yup';

const errorMessages = {
    required: 'This field is required',
};

export const formSchema = object({
    name: string().required(errorMessages.required),
    driver: string().required(errorMessages.required),
    fuelType: string().required(errorMessages.required),
    status: string().required(errorMessages.required),
});
