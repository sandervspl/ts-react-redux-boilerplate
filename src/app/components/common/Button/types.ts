import * as React from 'react';
import { propChildrenAll } from 'services/types';

export interface ButtonProps {
    children?: propChildrenAll;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: string;
}
