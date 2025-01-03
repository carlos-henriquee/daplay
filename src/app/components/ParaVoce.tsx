"use client"
import { useEffect, useState } from "react"
import WatchButton from "./watchButton";
import Image from "next/image";
const base_url = 'http://localhost:8000/films'



interface Filme {
    id: number
    title: string
    sinopse: string
    genero: string
    classificacao_indicativa: number
    imagem:string
    endereco_do_filme: string
    ano_de_lancamento?: number
    views: number
}

 export default function ParaVoce() {
    const [show, setShow] = useState<Filme[]>([]);
      useEffect(()=>{
         fetch('http://localhost:8000/films')
         .then((res)=>res.json())
         .then((data)=>{
            setShow(data);
         })
      },[])


      const IncrementViews = async(id:number, currentViews: number)=>{
         const updateView = currentViews + 1
         await fetch(`${base_url}/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({views: updateView})
         }) 
         
         setShow((prev)=>
            prev.map((show)=>
               show.id === id? {...show, views: updateView}: show
            )
         )
         
      }









    return (
        <div className="absolute top-[50rem]  m-10 flex flex-col">
            <h2 className="text-slate-700 text-2xl font-bold">Para Você</h2>
            <div className="flex flex-row mt-5">
               {show && show.map((show)=>(
                  <div key={show.id} className="w-52 mr-10 hover:scale-110 transition ease-in-out duration-200">
                     <div className="h-32 w-52 bg-slate-500 rounded-lg overflow-hidden">
                        <Image
                           className="h-full w-full"
                           src={show.imagem}
                           alt={show.title}
                           width={1000}
                           height={1000}
                        />

                     </div>
                     <h3 className="text-white font-semibold h-10 ml-1 mt-1">{show.title}</h3>
                     <WatchButton onClick={()=>IncrementViews(show.id, show.views)} endereço_do_filme={show.endereco_do_filme} categoria="normal" sinopse={show.sinopse} />
                  </div>
               ))}
            </div>
            
        </div>
    )
 }