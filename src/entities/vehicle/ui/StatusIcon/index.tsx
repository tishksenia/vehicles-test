import { FC } from 'react';

interface Props {
    color?: string;
}

export const StatusIcon: FC<Props> = ({ color = 'black' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="15"
            height="15"
            viewBox="0 0 90 90">
            <circle fill={color} cx="45" cy="45" r="45" />
        </svg>
    );
};
