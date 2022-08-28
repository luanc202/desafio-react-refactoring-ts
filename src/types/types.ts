import { IconBaseProps } from "react-icons";

export interface FoodType {
    name: string;
    id: number;
    available: boolean;
    image: string;
    description: string;
    price: string;
}

export interface FoodProps {
    food: FoodType;
    handleEditFood: (food: FoodType) => void;
    handleDelete: (id: number) => void;
}

export interface HeaderProps {
    openModal: () => void;
}

export interface InputProps {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    placeholder?: string;
}

export interface ModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    children: React.ReactNode;
}

export interface ModalPropsAddFood {
    setIsOpen: () => void;
    handleAddFood: (data: object) => void;
    isOpen: boolean;
}