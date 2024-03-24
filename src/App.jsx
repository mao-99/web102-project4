import { useEffect, useState } from 'react'
import Card from './components/card'
import SideNav from './components/sideNavs'
import axios from 'axios';
import { apiKey } from './assets/keys';
import './App.css'



function App() {
  const URL = `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${apiKey}`;
  const [banList, setBanList] = useState({weight:[], origin:[], lifeSpan:[]});
  const [allQueries, setAllQueries] = useState([]);
  const handleBan = (attr, val) => {
    setBanList({...banList, [attr]:[...banList[attr], val]});
    console.log('updated ban list');
    console.log(banList);
  };
  const [currObj, setCurrObj] = useState({breedName:'', imageLink:'', weight:'', origin:'', lifeSpan:''});
  const handleGenerate = async () => {
      try{
        let response;
        let responseData;
        let breedData;
        let newObj;
        let bannedOrigins;
        let bannedWeights;
        let bannedLifeSpans;
        do{
          response = await axios.get(URL);
          responseData = response.data[0];
          breedData = responseData.breeds[0];
          //console.log(response.data);
          newObj ={
            breedName: breedData.name,
            imageLink: responseData.url,
            weight: breedData.weight.imperial,
            origin: breedData.origin,
            lifeSpan: breedData.life_span
          };
          bannedOrigins = banList['origin'].map(item => item.origin);
          bannedWeights = banList['weight'].map(item => item.weight);
          bannedLifeSpans = banList['lifeSpan'].map(item => item.lifeSpan);
        }
        while (
          bannedLifeSpans.includes(newObj['lifeSpan']) ||
          bannedWeights.includes(newObj['weight']) ||
          bannedOrigins.includes(newObj['origin'])
        );
        setCurrObj(newObj);
        setAllQueries([...allQueries, newObj]);
        console.log(allQueries);
      }
      catch(error){
        console.error("Error fetching data: ", error);
      }
    };
  
  return (
    <>
      <div className='body'>
        <div className="sideNav">
          <div className="sideNavContent" style={{display:'flex', flexDirection:'column', width:'20vw'}}>
            <h3>History</h3>
            <ul>
              {allQueries.map((query, i) => {
                return (
                  <li key={i} style={{borderBottom:'2px solid rgba(154, 171, 158, 0.8)', display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'1rem'}}>
                    <img src={query.imageLink} alt="My cat" width={150} height={150} />
                    <p>This is a {query.breedName} from {query.origin}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="mainContent">
          <h1>Catrivia!!</h1>
          <h3><em>...Indulge yourself by delving into this cat awesomeness...</em></h3>
          <Card breedName={currObj.breedName} imageLink={currObj.imageLink} weight={currObj.weight} origin={currObj.origin} lifeSpan={currObj.lifeSpan} handleBan={handleBan} />
          <button className='mainButton' onClick={handleGenerate}>&#8634;</button>
        </div>
        <div className="sideNav">
          <div className="sideNavContent" style={{display:'flex', flexDirection:'column', width:'20vw'}}>
              <h3>Ban List</h3>
              {banList['weight'].map((item, i) => {
                return(
                  <div className="button" key={i}>
                    <strong>Weight: </strong>{item.weight}
                  </div>
                )
              })}
              {banList['origin'].map((item, i) => {
                return (
                  <div className="button" key={i}>
                    <strong>Origin: </strong>{item.origin}
                  </div>
                )
              })}
              {banList['lifeSpan'].map((item, i) => {
                return (
                  <div className="button" key={i}>
                    <strong>Lifespan: </strong>{item.lifeSpan}
                  </div>
                )
              })}
          </div>
        </div>        
      </div>
    </>
  )
}

export default App
