import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './header'
function Shivam(){
    let [arr,setarr]=useState([])
    const navigate=useNavigate()
    async function load(){
        const response=await axios.get('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=1cea2f9e64d890076f173bd66508d5c5')
        let array=response.data.articles
        console.log(array)
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
            items.image &&
            <div className='border' onClick={()=>{navigate('/img',{state:items})}}>
            <img src={items.image} />
            <h3>{items.title}</h3>
            </div>
            ))}
       </div>
       </>
    )
}
export default Shivam