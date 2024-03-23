import { useState } from "react"

export default function Card({breedName, imageLink, weight, origin, lifeSpan}) {
    
    return (
        <>
        <div className="card" style={{backgroundColor:'#d6e2bd', width:'30vw', height:'55vh', minWidth:'500px', minHeight:'400px', display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center', fontSize:'1.33rem', borderRadius:'8px', boxShadow:'0 0 10px rgba(154, 171, 158, 0.8)', margin:'2rem', flexDirection:'column'}}>
            <h3>{breedName}</h3>
            <div className="row">
                <button>{weight}</button>
                <button>{origin}</button>
                <button>{lifeSpan}</button>
            </div>
            <img src={imageLink} alt="The cat breed" className="cardImage"/>
        </div>
        </>
    )
}