import type { Recipe, RecipeResponse } from "../types/recipe";

const API = "https://dummyjson.com"

export function getRecipes(): Promise<RecipeResponse> {
    const response = fetch(`${API}/recipes?limit=0`)
        .then((data) => {
            if (!data.ok) {
                throw new Error("Não foi possível carregar as receitas.")
            }

            return data.json()
        })

    return response
}

export function getRecipeById(id: number): Promise<Recipe | null> {
    const response = fetch(`${API}/recipes/${id}`)
        .then((data) => {
            if (data.status === 404) {
                return null
            }

            if (!data.ok) {
                throw new Error("Não foi possível carregar a receita.")
            }

            return data.json()
        })

    return response
}
