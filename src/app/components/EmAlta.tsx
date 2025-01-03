"use client"
import { useEffect, useState } from "react"
import WatchButton from "./watchButton";
import Image from "next/image";

const base_url = ''




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

 export default function EmAlta() {
    const [show, setShow] = useState<Filme[]>([]);
      useEffect(()=>{
         fetch(`http://localhost:8000/films?_sort=views&_order=desc`)
         .then((res)=>res.json())
         .then((data)=>{
            const filteredData = data.filter((show:Filme)=>show.views>=10)
            const sortedData = filteredData.sort((a:Filme,b:Filme)=> b.views - a.views)
            setShow(sortedData)
            
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
        <div className="absolute top-[30rem]  m-10 flex flex-col">
            <h2 className="text-red-700 text-2xl font-bold">Em Alta</h2>
            <div className="flex flex-row mt-5">
               {show && show.map((boom)=>(
                  <div key={boom.id} className="w-52 mr-10 hover:scale-110 transition ease-in-out duration-200">
                     <div className="h-32 w-52 bg-slate-500 rounded-lg overflow-hidden">
                        <Image
                        className="h-full w-full"
                           src={boom.imagem}
                           alt={boom.title}
                           width={1000}
                           height={1000}
                        />

                     </div>
                     <h3 className="text-white font-semibold h-10 ml-1 mt-1">{boom.title}</h3>
                     <WatchButton onClick={()=>IncrementViews(boom.id, boom.views)} endereço_do_filme={boom.endereco_do_filme} categoria="normal" sinopse={boom.sinopse} />
                  </div>
               ))}
            </div>
            
        </div>
    )
 }