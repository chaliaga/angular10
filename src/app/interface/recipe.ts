
export interface Nutrient {
    title: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}

export interface Property {
    title: string;
    amount: number;
    unit: string;
}

export interface Nutrient2 {
    name: string;
    amount: number;
    unit: string;
}

export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
    nutrients: Nutrient2[];
}

export interface CaloricBreakdown {
    percentProtein: number;
    percentFat: number;
    percentCarbs: number;
}

export interface WeightPerServing {
    amount: number;
    unit: string;
}

export interface Nutrition {
    nutrients: Nutrient[];
    properties: Property[];
    ingredients: Ingredient[];
    caloricBreakdown: CaloricBreakdown;
    weightPerServing: WeightPerServing;
}

export interface Ingredient2 {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

export interface Equipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

export interface Length {
    number: number;
    unit: string;
}

export interface Step {
    number: number;
    step: string;
    ingredients: Ingredient2[];
    equipment: Equipment[];
    length?: Length;
}

export interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}

export interface Dish {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    lowFodmap: boolean;
    preparationMinutes?: number;
    cookingMinutes?: number;
    aggregateLikes: number;
    spoonacularScore: number;
    healthScore: number;
    creditsText: string;
    license: string;
    sourceName: string;
    pricePerServing: number;
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    nutrition: Nutrition;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    analyzedInstructions: AnalyzedInstruction[];
    spoonacularSourceUrl: string;
}

export interface Recipe {
    results: Dish[];
    offset: number;
    number: number;
    totalResults: number;
}
