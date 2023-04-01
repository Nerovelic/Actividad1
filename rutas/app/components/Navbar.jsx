import Link from "next/link";

const rutas = [
    {
        rutas: '/',
        label: "Inicio"
    },
    {
        rutas: '/about',
        label: 'Acerca de'
    },
    {
        rutas: '/registro',
        label: 'Registro'
    }
]

const Navbar = () =>{
    return(
        <main>
            <ul className="flex flex-row gap-3 bg-slate-500 text-zinc-200 font-bold text-lg p-2">
                {rutas.map(({rutas, label}) => (
                    <li key={rutas}>
                        <Link href={rutas}>{label}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Navbar;