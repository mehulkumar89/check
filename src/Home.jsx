import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { AlignJustify,Clapperboard,FlaskConical,Trophy,Cpu,Home } from 'lucide-react';
function Shivam(){
    let [arr,setarr]=useState([])
    let [chk,setchk]=useState(1)
    let [title,setTitle]=useState('News Express')
    const navigate=useNavigate()
    async function load(){
        const response=await axios.get('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=20&apikey=1cea2f9e64d890076f173bd66508d5c5')
        let array=response.data.articles
        setarr(array)        
    }

    useEffect(()=>{
       load()
    },[])
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        setchk(1)
     }
     function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("main").style.color = 'antiquewhite';
        setchk(0)
     }
     async function handlebtn(link){
      let array,val
      if(link){
        let link_1=link[0].toUpperCase() + link.substring(1);
        const response=await axios.get(`https://gnews.io/api/v4/top-headlines?category=${link}&lang=en&country=in&max=10&apikey=1cea2f9e64d890076f173bd66508d5c5`)
        array=response.data.articles
        val=`News Express -->${link_1}`
      } 
      else{
         const response=await axios.get(`https://gnews.io/api/v4/top-headlines?category=${link}&lang=en&country=in&max=10&apikey=1cea2f9e64d890076f173bd66508d5c5`)
         array=response.data.articles
         val=`News Express`
      }
        setTitle(val)
        setarr(array)
        setchk(1)
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
     }
    return(
        <div className='Main'>
        <div className='head'>{title}</div>
        <div id="mySidebar" class="sidebar">
            <a href="#" class="closebtn" onClick={() => closeNav()}>×</a>
            <a href="#home" onClick={()=>handlebtn("")}><Home/> Home</a>
            <a href="#home" onClick={()=>handlebtn("sports")}><Trophy/> Sports</a>
            <a href="#services" onClick={()=>handlebtn("science")}><FlaskConical/> Science</a>
            <a href="#clients" onClick={()=>handlebtn("technology")}><Cpu/> Technology</a>
            <a href="#contact" onClick={()=>handlebtn("entertainment")}><Clapperboard/> Entertaiment</a>
         </div>

         <div id="main">
            {chk && (
              <button class="openbtn" onClick={() => openNav()}><AlignJustify/></button> 
            )}
          </div>
        <div className='container'>
         {arr.map((items,index)=>(
            items.image &&
            <div className='container_01' onClick={()=>{navigate('/img',{state:items})}}>
            <img src={items.image} />
            <h3>{items.title}</h3>
            </div>
            ))}
       </div>
       </div>
    )
}
export default Shivam