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

  const pathname = usePathname()
  
  

  
  
  const click = (id) =>{
    var header = document.getElementById("topic_area");
    var btns = header.getElementsByClassName("topic_template");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      });
    }
}

useEffect((()=>{
  click()
}),)
  return (
    <div>
      <div className="topic_area" id="topic_area">
        {value.map((val)=>
        
          <Link href={val.href} className={name} key={val.id}  onClick={()=> click()}>
            <div>
              {val.name}
            </div>
            <div className='icon'>
              <GoChevronRight />
            </div>
          </Link>
          
        
        )}
      
      </div>
    </div>
  )
}