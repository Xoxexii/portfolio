'use client'
import './Sidebar.css'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import { GoChevronRight } from "react-icons/go";
import { usePathname } from 'next/navigation'


export default function Sidebar() {
  const value = [{id:0,name:'Profile',href:"/profile"},
  {id:1,name:'Education',href:"/education"},
  {id:2,name:'Skills',href:"/skills"},
  {id:3,name:'Experiences',href:"/experiences"}]

  
  const[name,SetName] = useState('topic_template')
  const[id,SetId] = useState('topic_template')

  const pathname = usePathname()
  
  
 const reload = () =>{
  var link = document.getElementsByClassName("topic_template")
    for(let i=0; i < link.length;i++){
      link[i].className = name;
    }
  if(pathname == '/profile'){
    link[0].className += ' active';
  }else if(pathname == '/education'){
    link[1].className += ' active';
  }else if(pathname == '/skills'){
    link[2].className += ' active';
  }
  else if(pathname == '/experiences'){
    link[3].className += ' active';
  }
 }
  
  
  const click = (id) =>{
    var link = document.getElementsByClassName("topic_template")
    for(let i=0; i < link.length;i++){
      link[i].className = name;
    }
    if(id == 0){
      link[0].className += ' active';
    }else if(id == 1){
      link[1].className += ' active';
    }else if(id == 2){
      link[2].className += ' active';
    }
    else if(id == 3){
      link[3].className += ' active';
    }
    
}

useEffect((()=>{
  reload();
}),)
  return (
    <div className="topic_area" id="topic_area">
      <div className="button_area">
        
        
          <Link href='/profile' className={name}  id={id} onClick={()=>click(0)}>
            <div className='name'>
              Profile 
            </div>
            <div className='icon'>
              <GoChevronRight />
            </div>
          </Link>
          <Link href='/education' className={name}  id={id} onClick={()=>click(1)}>
          <div className='name'>
            Education
          </div>
          <div className='icon'>
            <GoChevronRight />
          </div>
        </Link>
        <Link href='/skills' className={name} id={id} onClick={()=>click(2)}>
        <div className='name'>
          Skills
        </div>
        <div className='icon'>
          <GoChevronRight />
        </div>
      </Link>
      <Link href='/experiences' className={name} id={id} onClick={()=>click(3)}>
      <div className='name'>
        Experiences
      </div>
      <div className='icon'>
        <GoChevronRight />
      </div>
    </Link>
    
          
        
        
      
      </div>
    </div>
  )
}