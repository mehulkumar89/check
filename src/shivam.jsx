import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './header'
function Shivam(){
    let [arr,setarr]=useState([])
    const navigate=useNavigate()
    async function load(){
        const response=await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=2aec46dc39574b299956cb26ce1ccc8a')
        console.log(response)
        let array=response.data.articles
        setarr(array)        
    }

    useEffect(()=>{
       load()
    },[])
    return(
        <>
        <Header/>
        <div className='container'>
         {arr.map((items,index)=>(
            items.urlToImage &&
            <div className='border' onClick={()=>{navigate('/img',{state:items})}}>
            <img src={items.urlToImage} />
            <h3>{items.title}</h3>
            </div>
            ))}
       </div>
       </>
    )
}
export default Shivam