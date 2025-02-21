export interface PostRecipeRequest {
    title: string;    
    ingredients: [
        Ingredient
    ];
    preparationMethod: [
        string
    ];
}

interface Ingredient {
    quantity: number;
    description: string;
}