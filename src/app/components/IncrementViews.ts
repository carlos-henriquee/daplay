

const IncrementViews = async(id:number, currentViews: number)=>{
    const base_url = 'http://localhost:8000/films'
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
 export default IncrementViews