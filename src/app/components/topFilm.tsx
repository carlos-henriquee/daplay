"use client";
import WatchButton from "./watchButton";
import Image from "next/image";
import image1 from "../../../public/image1.png";
import blurry from "../../../public/Rectangle 7.png";
import { useEffect, useState } from "react";

interface Filme {
  id: number;
  title: string;
  sinopse: string;
  genero: string;
  classificacao_indicativa: number;
  imagem: string;
  endereco_do_filme: string;
  ano_de_lancamento: number;
  views?: number;
}

export default function TopFilm() {
const [topFilm, setTopFilm] = useState<Filme[]>();
  useEffect(() => {
     fetch('http://localhost:8000/films?_sort=ano_de_lancamento&_order=desc&_limit=1')
      .then(async (res) => {
        const film = await res.json();
        setTopFilm(film)
    })  
  }, []);
  
  return (
        <div className="absolute w-full">
            <Image
                className="w-full h-full object-cover"
                src={image1}
                alt="Top Filme"
            />
            <div className="absolute inset-0 flex bg-black bg-opacity-50">
                
                    {topFilm && topFilm.map((film)=>(
                        <div key={film.id} className="flex flex-col mt-60 ml-10">
                            <h1  className="text-white font-bold text-3xl w-72" >{film.title}</h1>
                            <WatchButton 
                                endereço_do_filme={film.endereco_do_filme} 
                                categoria="topFilm" 
                                sinopse={film.sinopse}
                            />
                        </div>
                    ))}
            </div>
            <Image
                className="w-screen z-20 -mt-40"
                src={blurry}
                alt="blurry_transition"
            />
        </div>
  );
}
