import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
                <Outlet />
            </main>
            <footer className="border-t border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <div>
                        <p className="text-sm font-bold">Receit<span className="text-indigo-600">ário</span></p>
                        <p className="mt-1 text-xs text-neutral-500">Projeto acadêmico · Checkpoint 5 · FIAP</p>
                    </div>
                    <p className="text-xs leading-relaxed text-neutral-500">
                        Henrique da Silva Muniz · RM 573874<br />
                        Erick Keiji Miyashiro · RM 568966
                    </p>
                </div>
            </footer>
        </div>
    )
}
