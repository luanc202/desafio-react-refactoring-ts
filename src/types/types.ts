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

export type FoodDataType = Omit<FoodType, "id" | "available">;

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

export interface ModalAddFoodProps {
    setIsOpen: () => void;
    handleAddFood: (data: FoodType) => void;
    isOpen: boolean;
}

export interface ModalEditFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateFood: (data: FoodType) => void;
    editingFood: FoodType;
}