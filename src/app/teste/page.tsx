"use client"
import { useEffect, useState } from "react"

interface Film {
    id: number;
    title: string;
    sinopse: string;
    genero: string;
    classificaçao_indicativa: number
}

export default function Teste() {

    const [films, setFilms] = useState<Film[]>([]);
    useEffect(()=>{
        fetch('http://localhost:8000/films')
        .then((res)=> res.json())
        .then(data=>{
            setFilms(data);
            console.log(data);
        })
    },[])
    return(
        <div>
            <h1 className="text-3xl text-white m-5">Films List</h1>
            {films.length === 0 ? (
      <p className="text-white m-5 text-2xl">Loading...</p>
    ) : (
      films.map((film) => (
        <h2 key={film.id} className="m-5 text-white">{film.title}</h2>
      ))
    )}
        </div>
    )
}