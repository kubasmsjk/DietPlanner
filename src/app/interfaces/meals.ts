export interface Breakfast {
    id: number;
    name: string;
    kcal: string;
}
export interface Dinner {
    id: number;
    name: string;
    kcal: string;
}
export interface Supper {
    id: number;
    name: string;
    kcal: string;
}
export interface Meals {
    Breakfast: Breakfast[];
    Dinner: Dinner[];
    Supper: Supper[];
}
