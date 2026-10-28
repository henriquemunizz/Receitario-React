import { useState } from "react";
import type { Recipe } from "../types/recipe";
import { RecipeList } from "../components/RecipeList";
import { useRecipes } from "../hooks/useRecipes";
import { Search } from "lucide-react";

export function CatalogPage() {
    const [query, setQuery] = useState('')
    const [cuisine, setCuisine] = useState('all')
    const [favorites, setFavorites] = useState<number[]>([])

    const { recipes, loading, cuisines, error } = useRecipes()

    const filtered = recipes.filter((recipe) => {
        const searchCuisine = cuisine === 'all' || recipe.cuisine === cuisine
        const searchWords = recipe.name.toLowerCase().includes(query.toLowerCase())

        return searchCuisine && searchWords
    })

    function handleToggleFavorite(recipe: Recipe): void {
        const list = [...favorites]
        const exists = list.includes(recipe.id)

        if (exists) {
            const newList = list.filter((item) => item !== recipe.id)
            setFavorites(newList)
            return
        }

        list.push(recipe.id)
        setFavorites(list)
    }

    return (
        <section className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
                <h1 className="font-display text-2xl font-bold">Catálogo</h1>
                <p className="text-sm text-neutral-500">{favorites.length} favoritas</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                    <Search size={15} className="absolute left-2.5 top-2.5 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Buscar receita..."
                        aria-label="Buscar receita por nome"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        className="field pl-8"
                    />
                </div>

                <select
                    name="cuisine-list"
                    id="cuisine"
                    aria-label="Filtrar por culinária"
                    value={cuisine}
                    onChange={(event) => setCuisine(event.target.value)}
                    className="field"
                >
                    {
                        cuisines.map((item) => {
                            return <option key={item} value={item}>{item === 'all' ? "Todas as culinárias" : item}</option>
                        })
                    }
                </select>
            </div>

            {
                loading ?
                    <p className="w-full">Carregando receitas...</p> :
                    error ?
                        <p className="w-full">Não foi possível carregar as receitas.</p> :
                        <RecipeList
                            recipes={filtered}
                            favorites={favorites}
                            onToggleFavorite={handleToggleFavorite}
                        />
            }
        </section>
    )
}
