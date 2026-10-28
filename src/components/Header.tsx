import { Link, NavLink } from "react-router-dom"

type IsActive = { isActive: boolean }

const linkClass = ({ isActive }: IsActive): string => {
    return `rounded-full px-3 py-1.5 text-sm font-medium transition ${isActive ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-stone-200"}`
}

export function Header() {
    return (
        <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link to="/" className="text-xl font-bold">
                    Receit<span className="text-indigo-600">ário</span>
                </Link>
                <nav className="flex items-center gap-1">
                    <NavLink to="/" className={linkClass}>Catálogo</NavLink>
                </nav>
            </div>
        </header>
    )
}
