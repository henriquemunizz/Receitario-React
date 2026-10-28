import { Link } from "react-router-dom"

export function NotFoundPage() {
    return (
        <section className="py-20 text-center">
            <h1 className="mb-3 font-display text-2xl font-bold">Erro 404 — Página não encontrada</h1>
            <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-700">Voltar ao catálogo</Link>
        </section>
    )
}
