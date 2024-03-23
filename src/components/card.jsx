import { useState } from "react"

export default function Card({breedName, imageLink, weight, origin, lifeSpan}) {
    
    return (
        <>
        <div className="card" style={{backgroundColor:'#d6e2bd', width:'30vw', height:'50vh', minWidth:'500px', minHeight:'150px', display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', fontSize:'1.33rem', borderRadius:'8px', boxShadow:'0 0 10px rgba(154, 171, 158, 0.8)', margin:'2rem'}}>
            <p>{breedName}</p>
        </div>
        </>
    )
}