import React, { useEffect,useState } from 'react';
import './Rowpost.css';

import {imageUrl} from '../../Constants/Constants';
import axios from '../../axios';

function Rowpost(props) {
const [movies,setmovies] =useState([])
  
useEffect(() => {
 
  axios.get(props.url).then(response=>{
    console.log(response.data);
    setmovies(response.data.results)
  }).catch(err=>{
    alert('Network Error')
  })
  


}, []);




  return (
    <div className='Row'>

<h1 className='headtitle'>{props.title}</h1>

<div className="posters">
  {movies.map((obj)=>

 
    <img className={ props.isSmall ? 'smallPoster'  :'poster'} alt="poster"  src={`${imageUrl +obj.backdrop_path }`} />
  
    )}


   
</div>


    </div>


  )
}


export default Rowpost