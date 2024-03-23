import { useEffect, useState } from 'react'
import Card from './components/card'
import SideNav from './components/sideNavs'
import axios from 'axios';
import { apiKey } from './assets/keys';
import './App.css'



function App() {
  const URL = `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${apiKey}`;
  const [allQueries, setAllQueries] = useState([]);
  const [currObj, setCurrObj] = useState({breedName:'', imageLink:'', weight:'', origin:'', lifeSpan:''});
  const handleGenerate = async () => {
      try{
        const response = await axios.get(URL);
        const responseData = response.data[0];
        const breedData = responseData.breeds[0];
        //console.log(response.data);
        const newObj ={
          breedName: breedData.name,
          imageLink: responseData.url,
          weight: breedData.weight.imperial,
          origin: breedData.origin,
          lifeSpan: breedData.life_span
        };
        setCurrObj(newObj);
        setAllQueries([...allQueries, newObj]);
        console.log(allQueries);
      }
      catch(error){
        console.error("Error fetching data: ", error);
      }
    };
    useEffect(() => {
      console.log(allQueries);
    }, [allQueries]);
  
  return (
    <>
      <div className='body'>
        <div className="sideNav">
          <SideNav title="History" allQueries={[...allQueries]}>
          </SideNav>
        </div>
        <div className="mainContent">
          <h1>Catrivia!!</h1>
          <h3><em>...Indulge yourself by delving into this cat awesomeness...</em></h3>
          <Card breedName={currObj.breedName} imageLink={currObj.imageLink} weight={currObj.weight} origin={currObj.origin} lifeSpan={currObj.lifeSpan}/>
          <button className='mainButton' onClick={handleGenerate}>&#8634;</button>
        </div>
        <div className="sideNav">
          <SideNav title="Ban List"></SideNav>
        </div>        
      </div>
    </>
  )
}

export default App
