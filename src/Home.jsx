import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { AlignJustify,Clapperboard,FlaskConical,Trophy,Cpu,Home } from 'lucide-react';
function HomePage(){
    let [arr,setarr]=useState([])
    let [chk,setchk]=useState(1)
    let [title,setTitle]=useState('News Express')
    const navigate=useNavigate()
    async function load(){
      const toastId = toast.loading('Loading...');
      try{
        const response=await axios.get('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=20&apikey=1cea2f9e64d890076f173bd66508d5c5')
        let array=response.data.articles
        setarr(array)
        toast.success('News Fetched Successfully', {
         id: toastId,
       });
      }
      catch(e){
         toast.error(`Error While fetching News`,{
         id: toastId
         });
      }        
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
      const ToastId = toast.loading('Loading...');
      let array,val
      try{
      if(link){
        let link_1=link[0].toUpperCase() + link.substring(1);
        const response=await axios.get(`https://gnews.io/api/v4/top-headlines?category=${link}&lang=en&country=in&max=10&apikey=1cea2f9e64d890076f173bd66508d5c5`)
        array=response.data.articles
        val=`News Express -->${link_1}`
        toast.success(`${link_1}'s News Fetched Successfully`, {
         id: ToastId,
       });
      } 
      else{
         const response=await axios.get(`https://gnews.io/api/v4/top-headlines?category=${link}&lang=en&country=in&max=10&apikey=1cea2f9e64d890076f173bd66508d5c5`)
         array=response.data.articles
         val=`News Express`
         toast.success('News Fetched Successfully', {
            id: ToastId,
          });
      }
        setTitle(val)
        setarr(array)
   }
      catch(e){
         console.log(e)
         toast.error(`Error While fetching News`,{
            id:ToastId,
         });
      }  
      finally{
        setchk(1)
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
      }  
     }
    return(
        <div className='Main'>
        <div className='head'>{title}</div>
        <div id="mySidebar" class="sidebar">
            <li class="closebtn" onClick={() => closeNav()}>×</li>
            <li  onClick={()=>handlebtn("")}><Home/> Home</li>
            <li  onClick={()=>handlebtn("sports")}><Trophy/> Sports</li>
            <li  onClick={()=>handlebtn("science")}><FlaskConical/> Science</li>
            <li  onClick={()=>handlebtn("technology")}><Cpu/> Technology</li>
            <li  onClick={()=>handlebtn("entertainment")}><Clapperboard/> Entertaiment</li>
         </div>

         <div id="main">
            {chk && (
              <button class="openbtn" onClick={() => openNav()}><AlignJustify/></button> 
            )}
          </div>
        <div className='container'>
         {arr.length>0 ? (
            arr.map((items,index)=>(
               items.image &&
               <div className='container_01'>
               <img src={items.image} alt='.png' />
               <h3>{items.title.substring(0,100)}<span className='title'
               onClick={()=>{navigate('/News',{state:items})}}>
                  ...Read More</span></h3>
               </div>
               ))
         ):(<h1>No News Avaliable to Display</h1>)}
       </div>
       </div>
    )
}
export default HomePage