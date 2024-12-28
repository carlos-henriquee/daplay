import Link from "next/link"

interface Botao {
    endereço_do_filme:string
    categoria:"topFilm" | "normal"
    sinopse: string
}

export default function WatchButton({endereço_do_filme, categoria, sinopse}:Botao) {
    

    if(categoria=="topFilm") {
        return(
            <div className="mt-3 bg-none w-52 flex items-center">
                <Link href={endereço_do_filme} className="transition ease-in-out duration-500 shadow-lg hover:shadow-red-700  group bg-red-500 h-10 w-24 flex items-center justify-center rounded-sm hover:last:">
                    <h3 className="text-white font-semibold">Assistir</h3>
                    <div className="flex items-center justify-center group-hover:translate-x-1 transition ease-in-out duration-500">
                            <span className="h-3 w-3 border-r-2 border-b-2 border-white -rotate-45 "></span>
                    </div>
                </Link>
                <button  className="group transition ease-in-out duration-500 hover:bg-white bg-slate-600 h-10 w-10 ml-5 rounded-full flex flex-col justify-center overflow-hidden">
                    <span className=" group-hover:bg-black bg-white h-5 w-3 rounded-full m-auto mt-1"></span>
                    <span className=" group-hover:bg-black bg-white h-8 w-3 rounded-full m-auto mt-1"></span>
                    <div className="hidden group-active:flex bg-slate-500 h-30 w-40 rounded-lg">
                        {sinopse}
                    </div>
                </button>
            </div>
            
        )
    }

    return(
        <div className="mt-3 bg-none w-52 flex items-center">
            <Link href={endereço_do_filme} className="transition ease-in-out duration-500 shadow-lg hover:shadow-red-700  group bg-red-500 h-10 w-24 flex items-center justify-center rounded-sm hover:last:">
                <h3 className="text-white font-semibold">Assistir</h3>
                <div className="flex items-center justify-center group-hover:translate-x-1 transition ease-in-out duration-500">
                        <span className="h-3 w-3 border-r-2 border-b-2 border-white -rotate-45 "></span>
                </div>
            </Link>
            <button  className=" z-0 group transition ease-in-out duration-500 hover:bg-white bg-slate-600 h-10 w-10 ml-5 rounded-full flex flex-col justify-center overflow-hidden">
                <span className=" group-hover:bg-black bg-white h-5 w-3 rounded-full m-auto mt-1"></span>
                <span className=" group-hover:bg-black bg-white h-8 w-3 rounded-full m-auto mt-1"></span>
                <input type="checkbox" id="st-modal" className="peer fixed appearance-none opacity-0"/>
            </button>
            <div className="hidden peer-checked:flex bg-slate-500 h-30 w-40 rounded-lg">
                        {sinopse}
            </div>
        </div>
        
    )
}