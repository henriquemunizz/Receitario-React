import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
                <Outlet />
            </main>
            <footer className="border-t border-stone-200 py-6 text-center text-xs text-neutral-400">
                Receitário - projeto acadêmico
            </footer>
        </div>
    )
}
