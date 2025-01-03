"use client";
import WatchButton from "./watchButton";
import Image from "next/image";
import blurry from "../../../public/Rectangle 7.png";
import { useEffect, useState } from "react";
import Header from "./Header";


const base_url = 'http://localhost:8000/films'



interface Filme {
  id: number;
  title: string;
  sinopse: string;
  genero: string;
  classificacao_indicativa: number;
  imagem: string;
  endereco_do_filme: string;
  ano_de_lancamento: number;
  views: number;
}

export default function TopFilm() {
    const [topFilm, setTopFilm] = useState<Filme[]>([]);
    useEffect(()=>{
        fetch(base_url)
        .then((res)=>res.json())
        .then((data)=>{
            const latestMovie = data.reduce((latest:Filme, current:Filme) => {
                return current.ano_de_lancamento > latest.ano_de_lancamento ? current : latest;
              });
            
            setTopFilm([latestMovie])
           
        })
    },[])




    const IncrementViews = async(id:number, currentViews: number)=>{
        const updateView = currentViews + 1
        await fetch(`${base_url}/${id}`, {
           method: 'PATCH',
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify({views: updateView})
        }) 
        
        setTopFilm((prev)=>
           prev.map((show)=>
              show.id === id? {...show, views: updateView}: show
           )
        )
        
     }



    if(!topFilm) {
        return(
            <div>
                 <div className="w-40 flex bg-red-500 h-96">

                    <Header/>

                    <h1 className="text-white text-3xl">Carregando...</h1>
                     <Image
                        className="w-screen mt-40"
                        src={blurry}
                        alt="blurry_transition"
                    /> 
                </div>
            </div>
        )
    }

  return (
        <div className="relative w-full h-[36rem] ">
            
            {topFilm && topFilm.map((filme)=>(
                <div key={filme.id} className="absolute w-full h-full">
                    <Image
                        className="w-full h-full opacity-70"
                        src={filme.imagem}
                        alt={filme.title}
                        width={1080}
                        height={720}
                    />
                    <h1 className="absolute w-[30rem] top-72 ml-24 text-4xl font-bold text-white">{filme.title}</h1>
                    <WatchButton 
                        onClick={()=>IncrementViews(filme.id, filme.views)} 
                        categoria="topFilm" sinopse={filme.sinopse} 
                        endereço_do_filme={filme.endereco_do_filme}
                    />
                </div>
            ))}
           <Header/>

             <Image
                className="absolute w-screen mt-[25rem]"
                src={blurry}
                alt="blurry_transition"
            /> 
        </div>
  );
}
