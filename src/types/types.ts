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