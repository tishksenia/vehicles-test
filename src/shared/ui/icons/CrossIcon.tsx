import React, { FC } from 'react';

interface Props {
    color?: string;
}

export const CrossIcon: FC<Props> = ({ color = '#fff' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={color}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
};
