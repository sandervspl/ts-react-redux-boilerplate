import { propChildrenAll } from 'services/customTypes';

export interface ButtonProps {
    children?: propChildrenAll;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: string;
}
