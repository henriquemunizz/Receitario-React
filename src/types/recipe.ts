export interface Recipe {
    id: number
    name: string
    image: string
    cuisine: string
    prepTimeMinutes: number
    cookTimeMinutes: number
    ingredients: string[]
    instructions: string[]
}

export interface RecipeResponse {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}
