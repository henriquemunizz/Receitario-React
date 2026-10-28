import { useEffect, useState } from "react";
import type { Recipe } from "../types/recipe";
import { getRecipes } from "../services/recipes";

interface UseRecipesResult {
    recipes: Recipe[]
    cuisines: string[]
    loading: boolean
    error: boolean
}

export function useRecipes(): UseRecipesResult {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getRecipes().then((data) => {
            setRecipes(data.recipes)
        }).catch(() => {
            setError(true)
        }).finally(() => setLoading(false))
    }, [])

    const cuisines = ['all', ...new Set(recipes.map((recipe) => recipe.cuisine))]

    return {
        recipes, loading, cuisines, error
    }
}
