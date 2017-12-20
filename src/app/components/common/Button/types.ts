import { propChildrenAll } from 'services/customTypes';

export interface IButtonProps {
    children?: propChildrenAll;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: string;
}
