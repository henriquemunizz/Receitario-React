import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import type { Recipe } from "../types/recipe"
import { getRecipeById } from "../services/recipes"
import { ArrowLeft } from "lucide-react"

export function RecipePage() {
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        getRecipeById(Number(id))
            .then((data) => {
                setRecipe(data)
                setError(false)
            })
            .catch(() => {
                setRecipe(null)
                setError(true)
            })
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <p className="py-20 text-center text-sm text-neutral-500">Carregando receita...</p>
    }

    if (error) {
        return <p className="py-20 text-center text-sm text-neutral-500">Não foi possível carregar a receita.</p>
    }

    if (!recipe) {
        return <p className="py-20 text-center text-sm text-neutral-500">Receita não encontrada.</p>
    }

    return (
        <section>
            <Link to="/" className="mb-4 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900">
                <ArrowLeft size={14} /> Voltar ao catálogo
            </Link>

            <div className="card grid gap-6 p-5 sm:grid-cols-2">
                <div className="flex h-72 items-center justify-center overflow-hidden rounded-lg bg-stone-50">
                    <img className="h-full object-contain" src={recipe.image} alt={recipe.name} />
                </div>

                <div>
                    <span className="text-xs font-medium uppercase text-indigo-600">{recipe.cuisine}</span>
                    <h1 className="mb-3 mt-1 font-display text-xl font-bold">{recipe.name}</h1>

                    <div className="mb-5 space-y-1 text-sm text-neutral-600">
                        <p>Preparo: {recipe.prepTimeMinutes} min</p>
                        <p>Cozimento: {recipe.cookTimeMinutes} min</p>
                        <p>Tempo total: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
                    </div>

                    <h2 className="mb-2 font-display text-lg font-bold">Ingredientes</h2>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-600">
                        {recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                </div>

                <div className="sm:col-span-2">
                    <h2 className="mb-2 font-display text-lg font-bold">Modo de preparo</h2>
                    <ol className="list-decimal space-y-2 pl-5 text-sm text-neutral-600">
                        {recipe.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}
                    </ol>
                </div>
            </div>
        </section>
    )
}
