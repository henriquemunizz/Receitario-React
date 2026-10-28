import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
import type { Recipe } from "../types/recipe"

interface RecipeCardProps {
    recipe: Recipe
    favorite: boolean
    onToggleFavorite: (recipe: Recipe) => void
}

export function RecipeCard({ recipe, favorite, onToggleFavorite }: RecipeCardProps) {
    return (
        <section className="card flex flex-col p-3 transition group hover:border-indigo-300 hover:shadow-md">
            <Link to={`/receitas/${recipe.id}`} className="flex-1">
                <div className="mb-3 flex h-32 items-center justify-center overflow-hidden rounded-lg bg-stone-50">
                    <img className="h-full object-contain transition group-hover:scale-105" src={recipe.image} alt={recipe.name} />
                </div>

                <h2 className="text-sm font-medium leading-snug">{recipe.name}</h2>
                <p className="mt-2 text-xs text-neutral-500">{recipe.cuisine}</p>
                <p className="mt-2 text-sm">Tempo total: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
            </Link>

            <button
                className="btn-primary mt-3 inline-flex px-3 py-1 text-xs"
                aria-pressed={favorite}
                onClick={() => onToggleFavorite(recipe)}
            >
                <Heart size={14} fill={favorite ? "currentColor" : "none"} />
                {favorite ? "Desfavoritar" : "Favoritar"}
            </button>
        </section>
    )
}
