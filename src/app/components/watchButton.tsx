import Link from "next/link"

interface Endereço {
    endereço_do_filme:string
}

export default function WatchButton({endereço_do_filme}:Endereço) {
    return(
        <div className="mt-5 ml-10 bg-none w-52 flex items-center">
            <Link href={endereço_do_filme} className="bg-red-500 h-10 w-24 flex items-center justify-center rounded-sm">
            <h3 className="text-white font-semibold">Assistir</h3>
            </Link>
            <Link  href = {endereço_do_filme} className="bg-slate-600 h-10 w-10 ml-5 rounded-full flex flex-col justify-center overflow-hidden">
                <span className="bg-white h-5 w-3 rounded-full m-auto mt-1"></span>
                <span className="bg-white h-8 w-3 rounded-full m-auto mt-1"></span>
            </Link>
        </div>
        
    )
}