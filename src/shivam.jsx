import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './header'
function Shivam(){
    let [arr,setarr]=useState([])
    const navigate=useNavigate()
    async function load(){
        const response=await axios.get('https://api.slingacademy.com/v1/sample-data/photos')
        let array=response.data.photos
        for(let i=0;i<array.length;i++){
            setarr((prev)=>{
                return [
                    ...prev,
                    {
                        name:array[i].title,
                        url:array[i].url,
                        description:array[i].description
                    }
                ]
            })
        }
        
    }


    useEffect(()=>{
       load()
    },[])
    return(
        
        <div className='chg'>
          <Header/>
         {arr.map((items,index)=>(
            <div className='border' onClick={()=>{navigate('/img',{state:items})}}>
            <img src={items.url} />
            </div>
         ))}
       </div>
    )
}
export default Shivam