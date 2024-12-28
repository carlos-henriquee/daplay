export interface Filme {
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
<div className="absolute inset-0 flex bg-black bg-opacity-50">
                <div className="flex flex-col">
                    <h1 
                    className="text-white font-bold mt-60 ml-10 text-3xl w-72">
                       
                    </h1>
                    <WatchButton endereço_do_filme={} categoria="topFilm"/>
                </div>
                
            </div>
            




























            <div className="absolute w-full">
      <Image
        className="w-full h-full object-cover"
        src={image1}
        alt="top film"
      />

        <div className="absolute inset-0 flex bg-black bg-opacity-50">
                <div className="flex flex-col">
                    <h1 
                    className="text-white font-bold mt-60 ml-10 text-3xl w-72">
                       
                    </h1>
                    <WatchButton endereço_do_filme={} categoria="topFilm"/>
                </div>
                
            </div>
      <Image
        className="w-screen z-20 -mt-40"
        src={blurry}
        alt="blurry_transition"
      />
    </div>