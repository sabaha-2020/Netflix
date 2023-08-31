import { useEffect,useState } from 'react';
import './Card.css';
import   Youtube from 'react-youtube';
import {imageUrl,API_KEY} from '../../Constants/Constants';
import axios from '../../axios';

function Card(props) {
const [movies,setmovies] =useState([])

const [urlId,setUrlId] = useState('')
  
useEffect(() => {
 
  axios.get(props.url).then(response=>{
    console.log(response.data);
    setmovies(response.data.results)
  }).catch(err=>{
    alert('Network Error')
  })
  


}, []);

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};


const handleMovie = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }else{
    console.log('Not Available');
  }

})
}

  return (
    <div className='Row'>

<h1 className='headtitle'>{props.title}</h1>

<div className="cards">
  {movies.map((obj,)=>

 
    <img onClick={()=>{handleMovie(obj.id)}} className="movieCard" alt="cards"  src={`${imageUrl +obj.backdrop_path }`} />
  
    )}
   
</div>

  {urlId &&  <Youtube videoId={urlId.key} opts={opts} />  }

    </div>


  )
}


export default Card