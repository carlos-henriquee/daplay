"use client"
import { useEffect, useState } from "react"
import WatchButton from "./watchButton";





interface Filme {
    id: number
    title: string
    sinopse: string
    genero: string
    classificacao_indicativa: number
    imagem:string
    endereco_do_filme: string
    ano_de_lancamento?: number
    views?: number
}

 export default function EmAlta() {
    const [booming, setBooming] = useState<Filme[]>([]);
      useEffect(()=>{
         fetch('http://localhost:8000/films')
         .then((res)=>res.json())
         .then((data)=>{
            setBooming(data);
         })
      },[])



    return (
        <div className="absolute top-[30rem] m-10 flex flex-col">
            <h2 className="text-red-700 text-2xl font-bold">Em Alta</h2>
            <div className="flex flex-row mt-5">
               {booming && booming.map((boom)=>(
                  <div key={boom.id} className="w-52 mr-10 hover:scale-110 transition ease-in-out duration-200">
                     <div className="h-36 w-52 bg-slate-500 rounded-lg"></div>
                     <h3 className="text-white font-semibold h-10 ml-1">{boom.title}</h3>
                     <WatchButton  endereço_do_filme={boom.endereco_do_filme} categoria="normal" sinopse={boom.sinopse} />
                  </div>
               ))}
            </div>
            
        </div>
    )
 }