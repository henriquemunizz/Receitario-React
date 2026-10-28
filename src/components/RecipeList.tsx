import type { Recipe } from "../types/recipe"
import { RecipeCard } from "./RecipeCard"

interface RecipeListProps {
    recipes: Recipe[]
    favorites: number[]
    onToggleFavorite: (recipe: Recipe) => void
}

export function RecipeList({ recipes, favorites, onToggleFavorite }: RecipeListProps) {
    return (
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {
                recipes.map((value) => {
                    return <RecipeCard
                        key={value.id}
                        recipe={value}
                        favorite={favorites.includes(value.id)}
                        onToggleFavorite={onToggleFavorite} />
                })
            }
        </div>
    )
}
