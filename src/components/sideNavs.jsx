export default function SideNav({title}){
    return (
        <>
        <div style={{display:'flex', flexDirection:'column', width:'20vw'}}>
            <h3>{title}</h3>
            {/* {console.log("This is a re render")}
            {allQueries.length === 0 ? <p></p> :
                    allQueries.map((query, index)=>{
                        return (
                        <div className="queryEntry" key={index}>
                        <img src={query.imageLink} alt="My cat" />
                        <p>This is a {query.breedName} from {query.origin}</p>
                        </div>)
                    })
            } */}
        </div>
        </>
    )
}